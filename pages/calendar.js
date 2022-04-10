import Calendar, { CalendarTileProperties } from 'react-calendar'
import styles from '/styles/cal.module.css'
import { useState, useEffect } from 'react'

function FeaturedTile({ featured }) {
  if (!featured || featured === undefined) {
    return (
      <div className={styles.featured}>
        <h2>No event on selected date</h2>
        <p>Click on a highlighted date to see event details.</p>
      </div>
    )
  }
  // console.log("in featured tile")
  // console.log(featured)
  return (
    <div className={styles.featured}>
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
  const [featuredIdx, setFeaturedIdx] = useState(events.length - 1)
  const [featured, setFeatured] = useState(events[events.length - 1])

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

  function prevDate() {
    if (featuredIdx === 0) return
    setFeaturedIdx((current) => current - 1);
  }

  function nextDate() {
    if (featuredIdx === events.length - 1) return
    setFeaturedIdx((current) => current + 1);
  }

  useEffect(() => {
    console.log(featuredIdx)
    setFeatured(events[featuredIdx])
  }, [featuredIdx])

  return (
    <section className={styles.container}>
      <h2>Calendar Of Events</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className={styles.content}>
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
      <div className={styles.arrowWrap}> 
        <button onClick={prevDate}>{"<"}</button>
        <button onClick={nextDate}>{">"}</button>
      </div>
    </section>
  )
}
