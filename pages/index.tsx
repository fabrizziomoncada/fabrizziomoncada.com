import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <h1>fabrizziomoncada.com</h1>
      <p>coming soon...</p>

      <style jsx>{`
        div {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          width: 100vw;
          height: 100vh;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          margin: 0;
        }
        p {
          margin: 0;
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}

export default Home
