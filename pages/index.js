import Head from 'next/head'

import Homepage from '../components/home'
import About from './about'
import Gallery from './gallery/index'
import Calendar from '../components/calendar'
import Join from '../components/join'
import Contact from '../components/contact'

import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home({ events }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Artruism at UC Davis</title>
        <meta name="description" content="Artruism is a club at UC Davis committed to drawing for a difference."></meta>
      </Head>
      <div className={styles.container}>
        <Nav />
        <div id='home'><Homepage /></div>
        <div id="about"><About /></div>
        

        <div id="gallery"><Gallery /></div>
        <div id="calendar"><Calendar events={events} /></div>
        <div id="join"><Join /></div>
        <div id='contact'><Contact /></div>
        <Footer />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  async function getData(url) {
    const response = await fetch(url);
    return response.text();
  }

  const spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSSN2ukR0aPRwQczan_y4cEjtEPzG6bD8wCwdlhsJHfM-aMDZTbcP0DVU6aQqne9s_rVCbZwYU3F-di/pub?gid=1802867475&single=true&output=csv";

  const data = await getData(spreadsheet_url)
  const events = data
    .split(/\r?\n/).map((l) => l.split(","))
    .map((event) => {
      // console.log(event)
      return {
        title: event[0], description: event[1],
        start: event[2], end: event[3], duration: event[4]
      };
    });

  console.log(events)

  return {
    props: { events }, // will be passed to the page component as props
  }
}

