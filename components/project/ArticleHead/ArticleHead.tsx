import { IconButton } from 'components/common/ui/IconButton'
import Twitter from 'components/icons/Twitter'
import { getFormattedDate } from 'lib/dateFormatter'
import s from './ArticleHead.module.css'

type Props = {
  title: string
  date: string
}

const ArticleHead = ({ title, date }: Props) => {
  return (
    <div className={s.root}>
      <h1>{title}</h1>
      <div className={s.info}>
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
