import { ImageResponse } from 'next/og'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
export default function Icon() {
  return new ImageResponse(
      (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" />
        <path d="M20 20 L50 80 L80 20 H65 L50 55 L35 20 Z" fill="currentColor" />
      </svg>),
    { ...size }
  )
}
