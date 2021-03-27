import { CSSProperties, MouseEvent } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './Button.module.css'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  href?: string
  variant?: 'default' | 'outline' | 'primary'
}

const Button = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  href,
  variant = 'default',
}: Props) => {
  const ButtonClassName = cn(
    s.root,
    {
      [s.default]: variant === 'default',
      [s.outline]: variant === 'outline',
      [s.primary]: variant === 'primary',
    },
    className
  )

  if (href) {
    return (
      <Link href={href}>
        <a aria-label={ariaLabel} style={style} className={ButtonClassName}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
      className={ButtonClassName}
    >
      {children}
    </button>
  )
}

export default Button
