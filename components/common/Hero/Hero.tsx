import CDMXMap from 'components/icons/CDMXMap'
import s from './Hero.module.css'

const Hero = () => {
  return (
    <section className={s.root}>
      <h1 className={s.title}>
        Hello, I’m <strong>Fabrizzio Moncada</strong>, <strong>UI UX</strong>{' '}
        Designer based in <strong>Mexico City.</strong>
      </h1>
      <p className={s.tagline}>silohuette of Mexico City</p>
      <div className={s.map}>
        <CDMXMap />
      </div>
    </section>
  )
}

export default Hero
