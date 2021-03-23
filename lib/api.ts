import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDir = join(process.cwd(), 'projects')

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDir)
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDir, `${realSlug}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectsSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((project1, project2) => (project1.date < project2.date ? 1 : -1))
  return projects
}

export function getProjects() {
  const fileDir = join(process.cwd(), 'lib/projects.json')
  const content = fs.readFileSync(fileDir, 'utf-8')
  const response = JSON.parse(content)

  return response
}
