import { useHideOnScroll } from 'lib/hooks/use-hide-on-scroll'
import { IconButton } from '../ui/IconButton'
import s from './Header.module.css'
import ThemeChanger from './ThemeChanger'
import cn from 'classnames'
import Logo from 'components/icons/Logo'

const Header = () => {
  const { isHidden } = useHideOnScroll()

  return (
    <header className={cn(s.root, { [s.hide]: isHidden })}>
      <IconButton href="/" ariaLabel="Go to home">
        <Logo width="32" height="32" />
      </IconButton>

      <ThemeChanger />
    </header>
  )
}

export default Header
