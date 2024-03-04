'use client';

import Spline from '@splinetool/react-spline';

export default function HomeHero() {
  return (
    <div className='w-full h-screen absolute top-0 left-0 -z-10 opacity-0 animate-home-hero'>
      <Spline scene='https://prod.spline.design/7RYA4QpkWFSEYatV/scene.splinecode' />
    </div>
  )
}
