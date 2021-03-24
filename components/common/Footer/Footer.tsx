import Behance from 'components/icons/Behance'
import Dribbble from 'components/icons/Dribbble'
import Figma from 'components/icons/Figma'
import Instagram from 'components/icons/Instragram'
import Mail from 'components/icons/Mail'
import {
  DribbbleURL,
  EmailURL,
  FigmaURL,
  instagramURL,
  BehanceURL,
} from 'lib/constants'
import { IconButton } from '../ui/IconButton'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.root}>
      <p>Be nice :)</p>
      <div>
        <IconButton href={instagramURL} ariaLabel="Link to Instagram">
          <Instagram />
        </IconButton>
        <IconButton href={FigmaURL} ariaLabel="Link to Figma">
          <Figma />
        </IconButton>
        <IconButton href={EmailURL} ariaLabel="Send an email">
          <Mail />
        </IconButton>
        <IconButton href={BehanceURL} ariaLabel="Link to Instagram">
          <Behance />
        </IconButton>
        <IconButton href={DribbbleURL} ariaLabel="Link to Dribbble">
          <Dribbble />
        </IconButton>
      </div>
    </footer>
  )
}

export default Footer
