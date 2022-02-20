import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useState } from 'react'

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [number, setNumber] = useState('')
const [reason, setReason] = useState('')
const [notes, setNotes] = useState('')
const [submitted, setSubmitted] = useState(false)

function Contact() {
    return (
      <div className={styles.container}>
        <Head>
          <title>"Questions? Reach Out!"</title>
        </Head>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
      </div>

      <div className={styles.container}>
          < form className={styles.main} >
              
          < formGroup className={styles.inputGroup} >
              < label htmlFor='firstName'>First Name</label>
              < input type='text' name='firstName' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
              < label htmlFor='lastName'>Last Name</label>
              < input type='text' name='lastName' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
              < label htmlFor='email'>UC Davis Email</label>
              < input type='text' name='email' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
              < label htmlFor='number'>Phone Number</label>
              < input type='text' name='number' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
              < label htmlFor='reason'>Reason for contact</label>
              < input type='text' name='reason' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
              < label htmlFor='notes'>Additional Notes</label>
              < input type='text' name='notes' className={styles.inputField} />
          </formGroup>

          < input type='submit'/>
          </form >
      </div>

        
    )
}

export default Contact
