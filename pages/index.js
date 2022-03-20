import Head from 'next/head'

import About from './about'
import Gallery from './gallery/index'
import Calendar from './calendar'
import Join from './join'
import Contact from './contact'

import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Artruism at UC Davis</title>
        <meta name="description" content="Artruism is a club at UC Davis committed to drawing for a difference."></meta>
      </Head>
      <div className={styles.container}>
        <Nav />
        <About />
        <Gallery />
        <Calendar />
        <Join />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
