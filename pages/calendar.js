import Calendar, { CalendarTileProperties } from 'react-calendar'
import styles from '/styles/cal.module.css'
import { useState, useEffect } from 'react'

// interface IEvent {
//   title: string
//   start: Date
//   end: Date
//   description: string
// }

function FeaturedTile({ featured }) {
  if (!featured || featured === undefined) return null
  console.log("in featured tile")
  console.log(featured)
  return (
    <div className={styles.cool}>
      <h2>{featured.title}</h2>
      <p>starts at {featured.start.toString()}</p>
      <p>ends at {featured.end.toLocaleString()}</p>
      <p>{featured.description}</p>
    </div>
  )
}

export default function Cal() {
  function filterEvents({ date }) {
    const startDate = new Date(date.setHours(0, 0, 0, 0)).valueOf()
    const filtered = events.find((event) => {
      return new Date(event.start.setHours(0, 0, 0, 0)).valueOf() === startDate
    })
    if (filtered) return styles.red
    return ''
  }

  const events = [
    {
      title: "Bowling @ MU",
      start: new Date(2022, 1, 24, 15),
      end: new Date(2022, 1, 24, 16),
      description: "Come to our social this weekend!"
      // have an image and locally map to the image
    },
    {
      title: "Social @ Davis Creamery",
      start: new Date(2022, 1, 25, 16),
      end: new Date(2022, 1, 25, 17),
      description: "Come out to our social this weekend at Creamery!",
    },
    {
      title: "Social @ iTea",
      start: new Date(2022, 1, 28, 16),
      end: new Date(2022, 1, 28, 17),
      description: "Come out to our social this weekend at iTea!",
    },
  ]

  const [date, setDate] = useState(new Date())
  const [featured, setFeatured] = useState(null)

  function onChange(nextValue, event) {
    setDate(nextValue)
    const startDate = nextValue.setHours(0, 0, 0, 0).valueOf()
    const filtered = events.find((event) => {
      return new Date(event.start.setHours(0, 0, 0, 0)).valueOf() === startDate
    })
    if (filtered) {
      console.log(filtered)
      setFeatured(filtered)
    } else {
      setFeatured(null)
    }
  }

  return (
    <section className={styles.container}>
      <h1>Calendar Of Events</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className={styles.hello}>
      <Calendar
        calendarType="US"
        value={date}
        view="month"
        onChange={onChange}
        tileClassName={filterEvents}
        prev2Label={null}
        next2Label={null}
      />
      <FeaturedTile featured={featured} />
      </div>
    </section>
  )
}
