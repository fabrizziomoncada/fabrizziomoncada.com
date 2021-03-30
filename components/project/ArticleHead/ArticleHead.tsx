import ExternalLink from 'components/common/ui/ExternalLink/ExternalLink'
import { IconButton } from 'components/common/ui/IconButton'
import Instagram from 'components/icons/Instragram'
import { instagramURL, INSTAGRAM_USERNAME } from 'lib/constants'
import { getFormattedDate } from 'lib/dateFormatter'
import s from './ArticleHead.module.css'

type Props = {
  title: string
  date: string
}

const ArticleHead = ({ title, date }: Props) => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.info}>
        <ExternalLink href={instagramURL} className={s.link}>
          <span className={s.linkIcon}>
            <Instagram width="20" height="20" />
          </span>
          {INSTAGRAM_USERNAME}
        </ExternalLink>
        {/* <IconLink
          href={TwitterURL}
          label={author}
          ariaLabel="Link to author's twitter"
        >
          <Twitter width="20" height="20" />
        </IconLink> */}
        <div className={s.date}>{getFormattedDate(date)}</div>
      </div>
    </div>
  )
}

export default ArticleHead
