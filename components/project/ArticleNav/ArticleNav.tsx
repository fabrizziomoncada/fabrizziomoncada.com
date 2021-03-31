import Link from 'next/link'
import s from './ArticleNav.module.css'

const ArticleNav = ({ projectsLinks }: { projectsLinks: TProjectLink[] }) => {
  return (
    <div className={s.root}>
      <h4 className={s.headline}>ALL PROJECTS</h4>
      {projectsLinks.map((project, index) => (
        <Link href={`/projects/${project.slug}`} key={project.slug}>
          <a className={s.link}>
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
