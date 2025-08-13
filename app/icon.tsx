import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="VeraSalud icon">
        <rect width="100" height="100" rx="20" />
        <path d="M35 55 L50 25 L65 55 L58 55 L50 40 L42 55 Z" />
      </svg>
    ),
    { ...size }
  )
}
