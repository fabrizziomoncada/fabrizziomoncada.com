import { useHideOnScroll } from 'lib/hooks/use-hide-on-scroll'
import { IconButton } from '../ui/IconButton'
import s from './Header.module.css'
import ThemeChanger from './ThemeChanger'
import cn from 'classnames'
import ArrowLeft from 'components/icons/ArrowLeft'

const ArticleHeader = ({ title }: { title?: string }) => {
  const { isHidden } = useHideOnScroll()

  return (
    <header className={cn(s.root, { [s.hide]: isHidden })}>
      <IconButton href="/" ariaLabel="Go to home">
        <ArrowLeft />
      </IconButton>

      {title && <div className={s.title}>{title}</div>}

      <ThemeChanger />
    </header>
  )
}

export default ArticleHeader
