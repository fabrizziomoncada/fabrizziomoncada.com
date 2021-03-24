import Globe from 'components/icons/Globe'
import Sun from 'components/icons/Sun'
import { IconButton } from '../ui/IconButton'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.root}>
      <IconButton href="/" ariaLabel="Go to home">
        <Globe />
      </IconButton>

      <IconButton>
        <Sun />
      </IconButton>
    </header>
  )
}

export default Header
