import { Button } from 'components/common/ui/Button'
import { IconButton } from 'components/common/ui/IconButton'
import Figma from 'components/icons/Figma'
import Globe from 'components/icons/Globe'
import s from './ProjectCard.module.css'
import Image from 'next/image'

const ProjectCard = ({
  project: { title, description, cover, urls, slug },
}: {
  project: TProject
}) => {
  return (
    <div className={s.root}>
      <Image
        src={cover}
        alt={title}
        width={327}
        height={327}
        className={s.cover}
      />
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <div className={s.buttons}>
        {urls.url && (
          <IconButton variant="outline" href={urls.url}>
            <Globe />
          </IconButton>
        )}
        <Button href={`/projects/${slug}`}>Read case study</Button>
        {urls.figma && (
          <IconButton variant="outline" href={urls.figma}>
            <Figma />
          </IconButton>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
