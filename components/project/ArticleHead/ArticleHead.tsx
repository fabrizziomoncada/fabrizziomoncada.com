import cn from 'classnames'
import ExternalLink from 'components/common/ui/ExternalLink/ExternalLink'
import Instagram from 'components/icons/Instragram'
import { instagramURL, INSTAGRAM_USERNAME } from 'lib/constants'
import { getFormattedDate } from 'lib/dateFormatter'

import { useMediaQuery } from 'lib/hooks/use-media-queries'
import { useEffect, useState } from 'react'
import s from './ArticleHead.module.css'

type Props = {
  title: string
  date: string
}

const ArticleHead = ({ title, date }: Props) => {
  const isTable = useMediaQuery(1023)
  const [isHided, setIsHided] = useState(false)

  const showText = () => {
    if (window.scrollY > 200) {
      setIsHided(true)
    } else {
      setIsHided(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showText)
    return () => {
      window.removeEventListener('scroll', showText)
    }
  }, [])

  return (
    <div className={cn(s.root, { [s.hide]: isHided && !isTable })}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.info}>
        <ExternalLink href={instagramURL} className={s.link}>
          <span className={s.linkIcon}>
            <Instagram width="20" height="20" />
          </span>
          {INSTAGRAM_USERNAME}
        </ExternalLink>
        <div className={s.date}>{getFormattedDate(date)}</div>
      </div>
    </div>
  )
}

export default ArticleHead
