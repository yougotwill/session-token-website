
import { Page } from 'components/Page/Page'

import {
    getDocumentBySlug,
    getDocumentPaths,
    getSettings,
} from 'lib/sanity.fetch'
import { pageBySlugQuery } from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { LiveQuery } from 'next-sanity/preview/live-query'
import Post from 'components/Post/Post'
import PageWrapper from 'components/PageWrapper/PageWrapper'
import metadata from 'lib/metadata'
import generateRssFeed from 'lib/rss'

export async function generateMetadata({ params }) {
    const { slug } = params

    const [settings, page] = await Promise.all([
        getSettings(),
        getDocumentBySlug(slug, 'post'),
    ])

    return metadata(page, settings)
}

export async function generateStaticParams() {
    const allPosts = await getDocumentPaths('post')

    generateRssFeed(allPosts)

    return allPosts.map(({ slug }) => ({ slug: slug.current }))
}

export default async function BlogPost({ params }) {
    const data = await getDocumentBySlug(params.slug, 'post')

    const isDraft = draftMode().isEnabled

    if (!data && !draftMode().isEnabled) {
        notFound()
    }

    const inner = (
        <PageWrapper>
            <Post post={data} />
        </PageWrapper>
    )

    if (!isDraft) {
        return inner
    }

    return (
        <LiveQuery
            enabled={draftMode().isEnabled}
            query={pageBySlugQuery}
            params={params}
            initialData={data}
            as={PagePreview}
        >
            {inner}
        </LiveQuery>
    )
}
