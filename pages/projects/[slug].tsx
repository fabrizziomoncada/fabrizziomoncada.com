import { Layout } from 'components/common/Layout'
import ArticleHead from 'components/project/ArticleHead/ArticleHead'
import ArticleNav from 'components/project/ArticleNav/ArticleNav'
import { getAllProjects, getProjectBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdown-to-html'

type Props = {
  project: TProjectArticle
  projectsLinks: TProjectLink[]
}

export default function ProjectPage({ project, projectsLinks }: Props) {
  return (
    <Layout
      type="article"
      title={project.title}
      description={project.description}
      image={project.image}
      date={new Date(project.date).toISOString()}
    >
      <ArticleHead title={project.title} date={project.date} />

      <article
        className="markdown"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />

      <ArticleNav projectsLinks={projectsLinks} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    'slug',
    'title',
    'description',
    'image',
    'date',
    'content',
  ])

  const content = await markdownToHtml(project.content || '')

  const projectsLinks = getAllProjects(['slug', 'title'])

  return {
    props: {
      project: {
        ...project,
        content,
      },
      projectsLinks,
    },
  }
}
