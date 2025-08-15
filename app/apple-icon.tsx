import { ImageResponse } from 'next/og'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180, height: 180, borderRadius: 40,
          background: 'linear-gradient(135deg,#EE3594,#3FC1D1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
        aria-label="VeraSalud"
      >
        <svg width="96" height="96" viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M6 13l3 3 9-9" stroke="#fff" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    )
  )
}
