import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import { ComponentProps } from 'react'

type Variant='primary'|'secondary'|'outline'
type As='button'|'a'
type BaseProps={as?:As;variant?:Variant;className?:string}
type ButtonProps=BaseProps & ComponentProps<'button'>
type AnchorProps=BaseProps & LinkProps & Omit<ComponentProps<'a'>,'href'>
const base='btn inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold tracking-tight focus-visible:outline-offset-2 transition-[transform,box-shadow] active:scale-[.98] shadow-[0_2px_8px_rgba(0,0,0,.06)]'
const variants:Record<Variant,string>={
  primary:'bg-[color:#EE3594] text-[#0A0A0A] hover:shadow-[0_6px_18px_rgba(0,0,0,.12)]',
  secondary:'bg-[color:#3FC1D1] text-[color:#21396F] hover:shadow-[0_6px_18px_rgba(0,0,0,.12)]',
  outline:'border border-[color:rgba(33,57,111,.2)] text-[color:#21396F] hover:shadow-[0_6px_18px_rgba(0,0,0,.12)]'
}
export default function Button(props:ButtonProps|AnchorProps){
  const {as='button',variant='primary',className,...rest}=props as ButtonProps & AnchorProps
  const cls=clsx(base,variants[variant],className)
  return as==='a'? <Link className={cls} {...(rest as AnchorProps)}/> : <button className={cls}{...(rest as ButtonProps)}/>
}
