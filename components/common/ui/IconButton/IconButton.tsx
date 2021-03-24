import { CSSProperties, MouseEvent } from 'react'
import Link from 'next/link'
import ExternalLink from '../ExternalLink/ExternalLink'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  href?: string
  external?: boolean
}

const IconButton = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  href,
  external = false,
}: Props) => {
  if (href && external) {
    return (
      <ExternalLink
        href={href}
        ariaLabel={ariaLabel}
        style={style}
        className={className}
      >
        {children}
      </ExternalLink>
    )
  }

  if (href) {
    return (
      <Link href={href}>
        <a aria-label={ariaLabel} style={style} className={className}>
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
      className={className}
    >
      {children}
    </button>
  )
}

export default IconButton
