import Globe from 'components/icons/Globe'
import { IconButton } from '../ui/IconButton'
import s from './Header.module.css'
import ThemeChanger from './ThemeChanger'

const Header = () => {
  return (
    <header className={s.root}>
      <IconButton href="/" ariaLabel="Go to home">
        <Globe />
      </IconButton>

      <ThemeChanger />
    </header>
  )
}

export default Header
