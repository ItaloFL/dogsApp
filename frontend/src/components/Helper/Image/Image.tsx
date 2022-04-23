import { useState } from 'react'
import { ImageSkeleton, ImageWrapper, Skeleton } from './style'

type ImageSkeletonType = {
  src: string
  alt: string
}

export const Image = ({ alt, src, ...props }: ImageSkeletonType) => {
  const [skeleton, setSkeleton] = useState(true)

  function handleLoad({ target }: any) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <ImageWrapper>
      {skeleton && <Skeleton></Skeleton>}
      <ImageSkeleton onLoad={handleLoad} alt={alt} src={src} {...props} />
    </ImageWrapper>
  )
}
