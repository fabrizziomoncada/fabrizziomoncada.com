import Head from 'components/common/head'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
} from 'lib/constants'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import s from './Layout.module.css'

type Props = {
  children: React.ReactNode
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article'
  date?: string
}

const Layout = ({
  children,
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  date,
}: Props) => {
  return (
    <>
      <Head
        title={title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}
        description={description}
        image={image}
        type={type}
        date={date}
      />

      <Header />

      <main className={s.main}>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
