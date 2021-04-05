import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './ArticleNav.module.css'

const ArticleNav = ({ projectsLinks }: { projectsLinks: TProjectLink[] }) => {
  const { query } = useRouter()
  return (
    <div className={s.root}>
      <h4 className={s.headline}>ALL PROJECTS</h4>
      {projectsLinks.map((project, index) => (
        <Link href={`/projects/${project.slug}`} key={project.slug}>
          <a
            className={cn(s.link, { [s.active]: project.slug === query?.slug })}
          >
            <span className={s.index}>
              {index < 10 ? `0${index + 1}` : index + 1}.
            </span>
            {project.title}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default ArticleNav
