type TProject = {
  slug: string
  title: string
  description: string
  cover: string
  urls: {
    url: string
    figma: string
  }
}

type TProjectArticle = {
  slug: string
  title: string
  date: string
  description: string
  cover?: string
  content: string
}

type TProjectLink = {
  slug: string
  title: string
}
