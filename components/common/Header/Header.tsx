import Globe from 'components/icons/Globe'
import { useHideOnScroll } from 'lib/hooks/use-hide-on-scroll'
import { IconButton } from '../ui/IconButton'
import s from './Header.module.css'
import ThemeChanger from './ThemeChanger'
import cn from 'classnames'

const Header = () => {
  const { isHidden } = useHideOnScroll()

  return (
    <header className={cn(s.root, { [s.hide]: isHidden })}>
      <IconButton href="/" ariaLabel="Go to home">
        <Globe />
      </IconButton>

      <ThemeChanger />
    </header>
  )
}

export default Header
