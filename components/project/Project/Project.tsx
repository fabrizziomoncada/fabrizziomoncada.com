import cn from 'classnames'
import Image from 'next/image'
import ArticleHead from '../ArticleHead/ArticleHead'
import ArticleNav from '../ArticleNav/ArticleNav'
import s from './Project.module.css'

type Props = {
  project: TProjectArticle
  projectsLinks: TProjectLink[]
}

const Project = ({ project, projectsLinks }: Props) => {
  return (
    <div className={s.root}>
      <ArticleHead title={project.title} date={project.date} />

      {project.cover && (
        <Image
          src={project.cover}
          alt={project.title}
          width={580}
          height={580}
          objectFit="cover"
          className={s.cover}
        />
      )}

      <article
        className={cn('markdown', s.projectMd)}
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></article>

      <ArticleNav projectsLinks={projectsLinks} />
    </div>
  )
}

export default Project
