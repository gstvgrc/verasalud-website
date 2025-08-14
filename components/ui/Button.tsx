import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import { ComponentProps } from 'react'

type Variant = 'primary'|'secondary'|'outline'
type As = 'button'|'a'
type BaseProps = {
  as?: As
  variant?: Variant
  className?: string
}
type ButtonProps = BaseProps & ComponentProps<'button'>
type AnchorProps = BaseProps & LinkProps<string> & Omit<ComponentProps<'a'>, 'href'>

const base = 'btn inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold tracking-tight focus-visible:outline-offset-2 transition-[transform,box-shadow] active:scale-[.98] shadow-elev-1'
const variants: Record<Variant,string> = {
  primary: 'bg-primary text-[#0A0A0A] hover:shadow-elev-2',   // texto oscuro para contraste AA
  secondary: 'bg-teal text-navy hover:shadow-elev-2',
  outline: 'border border-navy/20 text-navy hover:shadow-elev-2'
}

export default function Button(props: ButtonProps | AnchorProps){
  const { as='button', variant='primary', className, ...rest } = props as ButtonProps & AnchorProps
  const cls = clsx(base, variants[variant], className)
  return as==='a'
    ? <Link className={cls} {...(rest as AnchorProps)} />
    : <button className={cls} {...(rest as ButtonProps)} />
}
