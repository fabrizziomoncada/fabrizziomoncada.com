type TProject = {
  slug: string
  title: string
  subtitle: string
  description: string
  cover: string
  urls: {
    url: string
    figma: string
    case_study: string
  }
  main_link: {
    url: string
    label: string
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
