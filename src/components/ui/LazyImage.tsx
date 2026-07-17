import { useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  sizes?: string
}

export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
    />
  )
}
