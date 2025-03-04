'use client';
import { AnimatedElement } from '@/components/AnimatedComponent/AnimatedComponent';
import PageComponents from '@/components/PageComponents/PageComponents';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import SplineModel from '@/components/SplineScene/SplineScene';
import type { SplineSceneType } from '@/schemas/objects/flexibleSections/hero';
import clsx from 'clsx';

export default function SplinePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <PageWrapper>
      <PageComponents>
        <section className={clsx('flex w-full flex-col items-center justify-start pt-20')}>
          <SplineModel splineScene={slug as SplineSceneType} className={clsx('h-dvh w-screen')} />
          <div className={clsx('flex flex-col items-center justify-center gap-20 lg:px-20')}>
            <AnimatedElement delay={300} type="div">
              Reprehenderit qui sint eiusmod ut officia nisi deserunt commodo non mollit irure.
              Lorem eiusmod exercitation nulla sint duis aute sunt dolor mollit tempor pariatur
              velit. In dolor aute ad et qui qui labore commodo aute dolore officia qui deserunt.
              Minim id deserunt commodo nulla velit sunt in. Lorem laborum laborum labore ipsum
              culpa tempor id ipsum fugiat cillum. Laborum reprehenderit aute quis tempor officia
              aliqua ullamco est qui adipisicing nisi labore excepteur cillum. <br />
              <br />
              Do eiusmod aute consequat dolore sint. Adipisicing nulla sint quis do. Tempor
              voluptate magna esse aliquip pariatur nulla id adipisicing ad enim. Est consequat duis
              amet velit anim dolor in aliqua pariatur adipisicing non dolore enim. Ex sunt dolore
              cillum et amet aute dolore occaecat et laborum mollit dolore aute. Nostrud Lorem ad
              sint esse ad labore sunt in deserunt occaecat ex amet ut. Amet irure esse aliquip ex
              labore commodo irure. Elit cillum ad aliquip aute reprehenderit. Velit nulla ea
              voluptate nulla.
              <br />
              <br />
              Mollit cillum in aliqua fugiat minim sunt reprehenderit magna ea aliqua anim. In
              aliqua reprehenderit dolore laboris sit commodo id aliqua exercitation. Lorem amet
              commodo excepteur laboris quis mollit sit qui enim officia amet elit aliquip esse. Et
              laborum laborum sit aute reprehenderit ullamco pariatur pariatur irure exercitation
              occaecat. Commodo pariatur excepteur adipisicing irure consequat incididunt ex enim
              ex. Qui proident excepteur tempor magna ullamco irure. Officia fugiat deserunt minim
              do est in nostrud Lorem labore. Amet exercitation sint qui officia commodo labore nisi
              enim esse aliquip exercitation sunt.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit cillum fugiat magna cillum labore do. Deserunt consequat ullamco nisi
              mollit. Nulla adipisicing pariatur sunt dolore magna ut.
              <br />
              <br />
              Magna ullamco adipisicing in deserunt exercitation reprehenderit. Cupidatat qui
              officia qui aliquip aute elit deserunt commodo reprehenderit duis minim. Aliqua
              deserunt incididunt labore elit exercitation id id fugiat. Elit non laborum sint do
              aliqua enim proident. Ea laborum velit ex nisi aliqua nisi in esse laboris aute non
              irure Lorem laborum. Aute voluptate nulla pariatur aliqua non deserunt Lorem commodo
              dolore amet officia.
              <br />
              <br />
              Adipisicing voluptate ut proident pariatur cupidatat ad sit dolore ut officia in
              reprehenderit eu proident. Veniam ipsum irure esse cupidatat. Consequat nulla commodo
              proident ut deserunt mollit ea dolore.Ea adipisicing dolore non nulla sunt ipsum
              excepteur nostrud qui laborum sint adipisicing est. Id minim enim laborum eu est sunt
              dolor. Amet culpa amet voluptate do. Velit officia nisi consectetur culpa ut nulla
              consequat labore enim voluptate consectetur duis. Nulla labore consectetur aute anim
              duis qui est est exercitation proident labore esse elit.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit qui sint eiusmod ut officia nisi deserunt commodo non mollit irure.
              Lorem eiusmod exercitation nulla sint duis aute sunt dolor mollit tempor pariatur
              velit. In dolor aute ad et qui qui labore commodo aute dolore officia qui deserunt.
              Minim id deserunt commodo nulla velit sunt in. Lorem laborum laborum labore ipsum
              culpa tempor id ipsum fugiat cillum. Laborum reprehenderit aute quis tempor officia
              aliqua ullamco est qui adipisicing nisi labore excepteur cillum. <br />
              <br />
              Do eiusmod aute consequat dolore sint. Adipisicing nulla sint quis do. Tempor
              voluptate magna esse aliquip pariatur nulla id adipisicing ad enim. Est consequat duis
              amet velit anim dolor in aliqua pariatur adipisicing non dolore enim. Ex sunt dolore
              cillum et amet aute dolore occaecat et laborum mollit dolore aute. Nostrud Lorem ad
              sint esse ad labore sunt in deserunt occaecat ex amet ut. Amet irure esse aliquip ex
              labore commodo irure. Elit cillum ad aliquip aute reprehenderit. Velit nulla ea
              voluptate nulla.
              <br />
              <br />
              Mollit cillum in aliqua fugiat minim sunt reprehenderit magna ea aliqua anim. In
              aliqua reprehenderit dolore laboris sit commodo id aliqua exercitation. Lorem amet
              commodo excepteur laboris quis mollit sit qui enim officia amet elit aliquip esse. Et
              laborum laborum sit aute reprehenderit ullamco pariatur pariatur irure exercitation
              occaecat. Commodo pariatur excepteur adipisicing irure consequat incididunt ex enim
              ex. Qui proident excepteur tempor magna ullamco irure. Officia fugiat deserunt minim
              do est in nostrud Lorem labore. Amet exercitation sint qui officia commodo labore nisi
              enim esse aliquip exercitation sunt.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit cillum fugiat magna cillum labore do. Deserunt consequat ullamco nisi
              mollit. Nulla adipisicing pariatur sunt dolore magna ut.
              <br />
              <br />
              Magna ullamco adipisicing in deserunt exercitation reprehenderit. Cupidatat qui
              officia qui aliquip aute elit deserunt commodo reprehenderit duis minim. Aliqua
              deserunt incididunt labore elit exercitation id id fugiat. Elit non laborum sint do
              aliqua enim proident. Ea laborum velit ex nisi aliqua nisi in esse laboris aute non
              irure Lorem laborum. Aute voluptate nulla pariatur aliqua non deserunt Lorem commodo
              dolore amet officia.
              <br />
              <br />
              Adipisicing voluptate ut proident pariatur cupidatat ad sit dolore ut officia in
              reprehenderit eu proident. Veniam ipsum irure esse cupidatat. Consequat nulla commodo
              proident ut deserunt mollit ea dolore.Ea adipisicing dolore non nulla sunt ipsum
              excepteur nostrud qui laborum sint adipisicing est. Id minim enim laborum eu est sunt
              dolor. Amet culpa amet voluptate do. Velit officia nisi consectetur culpa ut nulla
              consequat labore enim voluptate consectetur duis. Nulla labore consectetur aute anim
              duis qui est est exercitation proident labore esse elit.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit qui sint eiusmod ut officia nisi deserunt commodo non mollit irure.
              Lorem eiusmod exercitation nulla sint duis aute sunt dolor mollit tempor pariatur
              velit. In dolor aute ad et qui qui labore commodo aute dolore officia qui deserunt.
              Minim id deserunt commodo nulla velit sunt in. Lorem laborum laborum labore ipsum
              culpa tempor id ipsum fugiat cillum. Laborum reprehenderit aute quis tempor officia
              aliqua ullamco est qui adipisicing nisi labore excepteur cillum. <br />
              <br />
              Do eiusmod aute consequat dolore sint. Adipisicing nulla sint quis do. Tempor
              voluptate magna esse aliquip pariatur nulla id adipisicing ad enim. Est consequat duis
              amet velit anim dolor in aliqua pariatur adipisicing non dolore enim. Ex sunt dolore
              cillum et amet aute dolore occaecat et laborum mollit dolore aute. Nostrud Lorem ad
              sint esse ad labore sunt in deserunt occaecat ex amet ut. Amet irure esse aliquip ex
              labore commodo irure. Elit cillum ad aliquip aute reprehenderit. Velit nulla ea
              voluptate nulla.
              <br />
              <br />
              Mollit cillum in aliqua fugiat minim sunt reprehenderit magna ea aliqua anim. In
              aliqua reprehenderit dolore laboris sit commodo id aliqua exercitation. Lorem amet
              commodo excepteur laboris quis mollit sit qui enim officia amet elit aliquip esse. Et
              laborum laborum sit aute reprehenderit ullamco pariatur pariatur irure exercitation
              occaecat. Commodo pariatur excepteur adipisicing irure consequat incididunt ex enim
              ex. Qui proident excepteur tempor magna ullamco irure. Officia fugiat deserunt minim
              do est in nostrud Lorem labore. Amet exercitation sint qui officia commodo labore nisi
              enim esse aliquip exercitation sunt.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit cillum fugiat magna cillum labore do. Deserunt consequat ullamco nisi
              mollit. Nulla adipisicing pariatur sunt dolore magna ut.
              <br />
              <br />
              Magna ullamco adipisicing in deserunt exercitation reprehenderit. Cupidatat qui
              officia qui aliquip aute elit deserunt commodo reprehenderit duis minim. Aliqua
              deserunt incididunt labore elit exercitation id id fugiat. Elit non laborum sint do
              aliqua enim proident. Ea laborum velit ex nisi aliqua nisi in esse laboris aute non
              irure Lorem laborum. Aute voluptate nulla pariatur aliqua non deserunt Lorem commodo
              dolore amet officia.
              <br />
              <br />
              Adipisicing voluptate ut proident pariatur cupidatat ad sit dolore ut officia in
              reprehenderit eu proident. Veniam ipsum irure esse cupidatat. Consequat nulla commodo
              proident ut deserunt mollit ea dolore.Ea adipisicing dolore non nulla sunt ipsum
              excepteur nostrud qui laborum sint adipisicing est. Id minim enim laborum eu est sunt
              dolor. Amet culpa amet voluptate do. Velit officia nisi consectetur culpa ut nulla
              consequat labore enim voluptate consectetur duis. Nulla labore consectetur aute anim
              duis qui est est exercitation proident labore esse elit.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit qui sint eiusmod ut officia nisi deserunt commodo non mollit irure.
              Lorem eiusmod exercitation nulla sint duis aute sunt dolor mollit tempor pariatur
              velit. In dolor aute ad et qui qui labore commodo aute dolore officia qui deserunt.
              Minim id deserunt commodo nulla velit sunt in. Lorem laborum laborum labore ipsum
              culpa tempor id ipsum fugiat cillum. Laborum reprehenderit aute quis tempor officia
              aliqua ullamco est qui adipisicing nisi labore excepteur cillum. <br />
              <br />
              Do eiusmod aute consequat dolore sint. Adipisicing nulla sint quis do. Tempor
              voluptate magna esse aliquip pariatur nulla id adipisicing ad enim. Est consequat duis
              amet velit anim dolor in aliqua pariatur adipisicing non dolore enim. Ex sunt dolore
              cillum et amet aute dolore occaecat et laborum mollit dolore aute. Nostrud Lorem ad
              sint esse ad labore sunt in deserunt occaecat ex amet ut. Amet irure esse aliquip ex
              labore commodo irure. Elit cillum ad aliquip aute reprehenderit. Velit nulla ea
              voluptate nulla.
              <br />
              <br />
              Mollit cillum in aliqua fugiat minim sunt reprehenderit magna ea aliqua anim. In
              aliqua reprehenderit dolore laboris sit commodo id aliqua exercitation. Lorem amet
              commodo excepteur laboris quis mollit sit qui enim officia amet elit aliquip esse. Et
              laborum laborum sit aute reprehenderit ullamco pariatur pariatur irure exercitation
              occaecat. Commodo pariatur excepteur adipisicing irure consequat incididunt ex enim
              ex. Qui proident excepteur tempor magna ullamco irure. Officia fugiat deserunt minim
              do est in nostrud Lorem labore. Amet exercitation sint qui officia commodo labore nisi
              enim esse aliquip exercitation sunt.
            </AnimatedElement>
            <AnimatedElement delay={300} type="div">
              Reprehenderit cillum fugiat magna cillum labore do. Deserunt consequat ullamco nisi
              mollit. Nulla adipisicing pariatur sunt dolore magna ut.
              <br />
              <br />
              Magna ullamco adipisicing in deserunt exercitation reprehenderit. Cupidatat qui
              officia qui aliquip aute elit deserunt commodo reprehenderit duis minim. Aliqua
              deserunt incididunt labore elit exercitation id id fugiat. Elit non laborum sint do
              aliqua enim proident. Ea laborum velit ex nisi aliqua nisi in esse laboris aute non
              irure Lorem laborum. Aute voluptate nulla pariatur aliqua non deserunt Lorem commodo
              dolore amet officia.
              <br />
              <br />
              Adipisicing voluptate ut proident pariatur cupidatat ad sit dolore ut officia in
              reprehenderit eu proident. Veniam ipsum irure esse cupidatat. Consequat nulla commodo
              proident ut deserunt mollit ea dolore.Ea adipisicing dolore non nulla sunt ipsum
              excepteur nostrud qui laborum sint adipisicing est. Id minim enim laborum eu est sunt
              dolor. Amet culpa amet voluptate do. Velit officia nisi consectetur culpa ut nulla
              consequat labore enim voluptate consectetur duis. Nulla labore consectetur aute anim
              duis qui est est exercitation proident labore esse elit.
            </AnimatedElement>
          </div>
        </section>
      </PageComponents>
    </PageWrapper>
  );
}
