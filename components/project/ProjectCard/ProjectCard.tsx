import { Button } from 'components/common/ui/Button'
import { IconButton } from 'components/common/ui/IconButton'
import Figma from 'components/icons/Figma'
import Globe from 'components/icons/Globe'
import s from './ProjectCard.module.css'

const ProjectCard = ({
  project: { title, description, urls },
}: {
  project: TProject
}) => {
  return (
    <div className={s.root}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <div className={s.buttons}>
        {urls.url && (
          <IconButton variant="outline">
            <Globe />
          </IconButton>
        )}
        <Button>Read case study</Button>
        {urls.figma && (
          <IconButton variant="outline">
            <Figma />
          </IconButton>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
