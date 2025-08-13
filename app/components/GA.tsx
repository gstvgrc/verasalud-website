'use client'
import Script from 'next/script'

// Componente que carga Google Analytics de forma asíncrona
export default function GA() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  if (!GA_ID) return null
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true, transport_type: 'beacon' });
        `}
      </Script>
    </>
  )
}
