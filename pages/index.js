import Head from 'next/head'

import About from './about'
import Gallery from './gallery/index'
import Calendar from './calendar'
import Join from './join'
import Contact from './contact'

import styles from '../styles/Home.module.css'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Artruism at UC Davis</title>
        <meta name="description" content="Artruism is a club at UC Davis committed to drawing for a difference."></meta>
      </Head>
      <Nav />
      <About />
      <Gallery />
      <Calendar />
      <Join />
      <Contact />
    </div>
  )
}
