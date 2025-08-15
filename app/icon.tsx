import { ImageResponse } from 'next/og'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg,#EE3594,#3FC1D1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
        aria-label="VeraSalud"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M6 13l3 3 9-9" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    )
  )
}
