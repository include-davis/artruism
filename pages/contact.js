//Unless noted, the commented-out code is part of the project, and hsn't been debugged yet.

import styles from "../styles/contact.module.css"
// import formstyles from "../styles/contact/form.module.css"
import Head from 'next/head'
// import { useState } from 'react'

// const [firstName, setFirstName] = useState('')
// const [lastName, setLastName] = useState('')
// const [email, setEmail] = useState('')
// const [number, setNumber] = useState('')
// const [reason, setReason] = useState('')
// const [notes, setNotes] = useState('')
// const [submitted, setSubmitted] = useState(false)

/*
const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        firstName,
        lastName,
        email,
        number,
        reason,
        notes
    }
*/

//   fetch('/api/contact', {
//      method: 'POST',
//      headers: {
//        'Accept': 'application/json, text/plain, */*',
/*        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }
*/

function Contact() {
    return (
      <div className={styles.container}>
        <style>@import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');</style>
        
        <Head>
            <title>Artruism at UC Davis | Contact Us</title>
        </Head>

        <div className={styles.title}>
            Questions? Reach Out!
        </div>
        <div className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className={styles.containerinfo}>
            <div className={styles.containerdescr}> 
                <div className={styles.heading}> Contact Information </div>
                <div className={styles.subheading}> Reach out to us via these contact methods. Email us for any questions, concerns, and more. </div>
            </div>
            <div className={styles.containerlocation}>
                <div className={styles.heading2}> Our Location </div>
                <div className={styles.subheading}> 1 Shields Ave, Davis, CA 95616 </div>
            </div>
            <div className={styles.containerconnect}>
                <div className={styles.heading2}> Connect With Us </div>
                <div className={styles.containerconnect2}>
                    <div className={styles.subheading}> 
                        (123) 456-7890 
                        artruismatdavis@gmail.com // is this the email we will be using?
                    </div>
                </div>
            </div>
            <div className={styles.containerconnectsocials}>
                    
            </div>
        </div>

        <div className={styles.containerform}> //should this be a form instead of a div?
            <div className={styles.containerfirstname}> //formGroup?
                <div className={styles.formlabel}> First name </div>
                    <input 
                        type="text"
                     // < label htmlFor='firstName'>First Name</label>
                     // < input type='text' onChange={(e)=>{setFirstName(e.target.value)}} name='firstName' className={styles.inputField} />
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containerlastname}> // should this be a formGroup?
                <div className={styles.formlabel}> Last name </div>
                    <input 
                        type="text"
                     // < label htmlFor='lastName'>Last Name</label>
                     // < input type='text' onChange={(e)=>{setLastName(e.target.value)}} name='lastName' className={styles.inputField} />
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containeremail}> //formGroup?
                <div className={styles.formlabel}> UC Davis email </div>
                    <input 
                        type="text"
                       // < label htmlFor='email'>UC Davis Email</label>
                       // < input type='text' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containerphone}> //formGroup?
                <div className={styles.formlabel}> Phone number </div>
                    <input 
                        type="text"
                   //  < label htmlFor='number'>Phone Number</label>
                   // < input type='text' onChange={(e)=>{setNumber(e.target.value)}} name='number' className={styles.inputField} />
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containerreason}> //formGroup?
                <div className={styles.formlabel}> Reason for contact </div>
                    <input 
                        type="text"
                     // < label htmlFor='reason'>Reason for contact</label>
                    // < input type='text' onChange={(e)=>{setReason(e.target.value)}} name='reason' className={styles.inputField} />
                        className={styles.formfull}
                    />
            </div>

            <div className={styles.containernotes}> //formGroup?
                <div className={styles.formlabel}> Additional notes </div>
                    <input 
                        type="text"
                     // < label htmlFor='notes'>Additional Notes</label>
                     // < input type='text' name='notes' className={styles.inputField} />
                        className={styles.formfull}
                    />
            </div>

        // input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        </div>
      </div>
    )
}

export default Contact
