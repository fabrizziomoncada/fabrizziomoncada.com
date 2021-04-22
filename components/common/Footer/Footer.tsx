import Behance from 'components/icons/Behance'
import Dribbble from 'components/icons/Dribbble'
import Figma from 'components/icons/Figma'
import Instagram from 'components/icons/Instragram'
import Linkedin from 'components/icons/Linkedin'
import Mail from 'components/icons/Mail'
import {
  DribbbleURL,
  EmailURL,
  FigmaURL,
  instagramURL,
  BehanceURL,
  LinkedinURL,
} from 'lib/constants'
import { IconButton } from '../ui/IconButton'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.root}>
      <p className={s.legend}>Be nice :)</p>
      <div className={s.linksContainer}>
        <IconButton href={FigmaURL} external ariaLabel="Link to Figma">
          <Figma />
        </IconButton>
        <IconButton href={BehanceURL} external ariaLabel="Link to Behance">
          <Behance />
        </IconButton>
        <IconButton href={EmailURL} external ariaLabel="Send an email">
          <Mail />
        </IconButton>
        <IconButton href={LinkedinURL} external ariaLabel="Link to Linkedin">
          <Linkedin />
        </IconButton>
        <IconButton href={instagramURL} external ariaLabel="link to instagram">
          <Instagram />
        </IconButton>
      </div>
    </footer>
  )
}

export default Footer
