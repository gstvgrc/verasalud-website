import { ImageResponse } from 'next/og'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export default function Icon() {
  return new ImageResponse(
    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" />
      <text x="50" y="62" textAnchor="middle" fontSize="60" fontFamily="Arial">V</text>
    </svg>),
    { ...size }
  )
}
