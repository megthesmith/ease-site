import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ease Osteopathy and Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/ease-logo.svg" alt="Ease logo"></img>
        <p className="description">
          Ease Osteopathy and Health's website is in progress.
        </p>
        <a className="button" href="https://easehealth.janeapp.com/#staff_member/1" target="_blank">Book an appointment</a>
      </main>

      <Footer />
    </div>
  )
}
