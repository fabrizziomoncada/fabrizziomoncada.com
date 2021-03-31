import { useHideOnScroll } from 'lib/hooks/use-hide-on-scroll'
import { IconButton } from '../ui/IconButton'
import s from './Header.module.css'
import ThemeChanger from './ThemeChanger'
import cn from 'classnames'
import ArrowLeft from 'components/icons/ArrowLeft'
import { useEffect, useState } from 'react'

const ArticleHeader = ({ title }: { title?: string }) => {
  const { isHidden } = useHideOnScroll()

  const [isShowed, setIsShowed] = useState(false)

  const showText = () => {
    if (window.scrollY > 200) {
      setIsShowed(true)
    } else {
      setIsShowed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showText)
    return () => {
      window.removeEventListener('scroll', showText)
    }
  }, [])

  return (
    <header className={cn(s.root, { [s.hide]: isHidden })}>
      <IconButton href="/" ariaLabel="Go to home">
        <ArrowLeft />
      </IconButton>

      {title && (
        <div className={cn(s.title, { [s.show]: isShowed })}>{title}</div>
      )}

      <ThemeChanger />
    </header>
  )
}

export default ArticleHeader
