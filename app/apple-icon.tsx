import type { MetadataRoute } from 'next'
import { ImageResponse } from 'next/og'

export function generateImageMetadata(): MetadataRoute.Icon[] {
  return [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
  ]
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          background: '#21396f',
          color: 'white',
        }}
      >
        V
      </div>
    ),
    { width: 180, height: 180 }
  )
}
