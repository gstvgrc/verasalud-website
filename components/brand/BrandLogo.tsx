export default function BrandLogo({className='w-32 h-10'}:{className?:string}){
  return (
    <svg className={className} viewBox="0 0 320 100" role="img" aria-label="VeraSalud">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EE3594"/><stop offset="100%" stopColor="#3FC1D1"/>
        </linearGradient>
      </defs>
      <rect x="8" y="18" rx="16" width="64" height="64" fill="url(#g)" />
      <path d="M28 58 L40 40 L52 58" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="88" y="66" fontFamily="system-ui, Segoe UI, Arial" fontSize="36" fontWeight="800" fill="#21396F">VeraSalud</text>
    </svg>
  )
}
