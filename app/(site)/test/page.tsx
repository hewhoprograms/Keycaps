'use client'

import { prefix } from '@/app/prefix'
import type { Metadata } from 'next'
import Image,  { type ImageLoaderProps } from 'next/image'
import React from 'react'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps ) => {
  return `https://samiti.dev/${src}?w=${width}&q=${quality || 75}`
}

// export const metadata: Metadata = {
//   title: 'testing metadata title',
//   description: 'testing metadata description',
// }

function TestPage() {
  return (<>
  
  <div>TestPage</div>
    <h3>img tag</h3>
    <img src={ `${prefix}/samitidev.png` } alt='logo' width={128} height={93} className="w-[128px] h-[93px] mr-3"/>
    <h3>Next img component</h3>
    <Image src={ `${prefix}/samitidev.png`} alt='logo' width={128} height={93} className="w-[128px] h-[93px] mr-3" />
    <h3>Next img component with loader</h3>
    <Image
      loader={imageLoader}
      src="samitidev.png"
      alt="Picture of the author"
      width={500}
      height={363}
    />
  </>
  )
}

export default TestPage