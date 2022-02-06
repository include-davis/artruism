import Head from 'next/head'

import About from './about'
import Gallery from './gallery/index'
import Calendar from './calendar'
import Join from './join'
import Contact from './contact'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Artruism</title>
      </Head>
      <About />
      <Gallery />
      <Calendar />
      <Join />
      <Contact />
    </div>
  )
}
