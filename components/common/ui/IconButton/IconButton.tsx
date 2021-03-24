import { CSSProperties, MouseEvent } from 'react'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  href?: string
}

const IconButton = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  href,
}: Props) => {
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
