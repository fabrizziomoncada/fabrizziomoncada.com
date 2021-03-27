import { Layout } from 'components/common/Layout'
import Section from 'components/common/Section/Section'
import ProjectCard from 'components/project/ProjectCard/ProjectCard'
import { getProjects } from 'lib/api'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Section
        title="Projects"
        description="I’ve worked with start-ups and small companies, also I’ve created some concepts for my personal side projects."
      >
        {projects.map((project: TProject) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </Section>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const projects: TProject = getProjects()

  return {
    props: {
      projects,
    },
  }
}
