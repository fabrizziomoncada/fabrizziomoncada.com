import { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
  href: string
  newTab?: boolean
  style?: CSSProperties
  className?: string
  ariaLabel?: string
}

function ExternalLink({
  children,
  href,
  newTab = true,
  style = {},
  className = '',
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      // Change target and rel attributes is newTab is true
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      style={style}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default ExternalLink
