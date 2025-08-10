import type { MetadataRoute } from 'next'
import { ImageResponse } from 'next/og'

export function generateImageMetadata(): MetadataRoute.Icon[] {
  return [
    { rel: 'icon', url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    { rel: 'icon', url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
    { rel: 'icon', url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
  ]
}

// Fallback dinámico si faltan los PNG en /public
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          background: '#21396f',
          color: 'white',
        }}
      >
        VS
      </div>
    ),
    { width: 32, height: 32 }
  )
}
