import { Button } from 'components/common/ui/Button'
import { IconButton } from 'components/common/ui/IconButton'
import Figma from 'components/icons/Figma'
import Globe from 'components/icons/Globe'
import s from './ProjectCard.module.css'
import Image from 'next/image'

const ProjectCard = ({
  project: { title, description, cover, urls, main_link },
}: {
  project: TProject
}) => {
  return (
    <div className={s.root}>
      <Image
        src={cover}
        alt={title}
        width={550}
        height={550}
        className={s.cover}
      />
      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
        <div className={s.buttons}>
          {urls.url && (
            <IconButton variant="outline" href={urls.url}>
              <Globe />
            </IconButton>
          )}

          {main_link && <Button href={main_link.url}>{main_link.label}</Button>}

          {urls.figma && (
            <IconButton variant="outline" href={urls.figma}>
              <Figma />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
