import { CSSProperties, MouseEvent } from 'react'
import Link from 'next/link'
import ExternalLink from '../ExternalLink/ExternalLink'
import cn from 'classnames'
import s from './IconButton.module.css'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  href?: string
  external?: boolean
  variant?: 'default' | 'outline' | 'primary'
}

const IconButton = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  href,
  variant = 'default',
  external = false,
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

  if (href && external) {
    return (
      <ExternalLink
        href={href}
        ariaLabel={ariaLabel}
        style={style}
        className={ButtonClassName}
      >
        {children}
      </ExternalLink>
    )
  }

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

export default IconButton
