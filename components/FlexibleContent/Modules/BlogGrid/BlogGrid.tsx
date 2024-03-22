import { AnimatedElement } from '@/components/AnimatedComponent/AnimatedComponent';
import { CMSDocument, sanityQuery } from '@/lib/sanity.queries';
import clsx from 'clsx';
import s from './BlogGrid.module.sass';
import BlogGridInner from './BlogGridInner';
import BlogTile from './BlogTile';

export default async function BlogGrid({ morePostsTitle }: { morePostsTitle: string }) {
  const posts = await sanityQuery
    .from(CMSDocument.Post)
    .select()
    .neq('slug.current', null)
    .execute();

  const sortedPosts = posts.sort((a, b) => {
    const aDate = new Date(a.datePosted);
    const bDate = new Date(b.datePosted);

    return bDate.getTime() - aDate.getTime();
  });

  const [firstPost, ...postsWithoutFirst] = sortedPosts;

  if (!firstPost) {
    return null;
  }

  return (
    <section className={clsx(s.Outer, `Container Deep`)}>
      <BlogTile post={firstPost} isFeatured />
      <div className={s.Grid}>
        <AnimatedElement type="h5" delay={300}>
          {morePostsTitle}
        </AnimatedElement>
        <BlogGridInner posts={postsWithoutFirst} />
      </div>
    </section>
  );
}
