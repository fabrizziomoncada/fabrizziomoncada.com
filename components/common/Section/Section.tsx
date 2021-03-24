import s from './Section.module.css'

type Props = {
  title: string
  description: string
  children: React.ReactNode
}

const Section = ({ title, description, children }: Props) => {
  return (
    <section className={s.root}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      {children}
    </section>
  )
}

export default Section
