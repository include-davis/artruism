import styles from "../styles/contact.module.css"
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'

function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [reason, setReason] = useState('')
    const [notes, setNotes] = useState('')
    const [submitted, setSubmitted] = useState(false)

    //changes color of active form section title
    const changefncolor = () => {
        getElementById("firstName").setAttribute("color", "#A16373")
    }

    // clears form
    const clearForm = () => {
        document.getElementById("newForm").reset()
    }
    
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

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received!')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setFirstName('')
            setLastName('')
            setEmail('')
            setNumber('')
            setReason('')
            setNotes('')
            setBody('')
        }
    })
}

    /* debugging
    useEffect(() => {
        console.log(number)
    }, [number])
    */

    return (
        <div className={styles.container}>
            <style>@import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');</style>

            <Head>
                <title>Artruism at UC Davis | Contact Us</title>
            </Head>

            <div className={styles.containerheading}>
                <div className={styles.title}>
                    Questions? Reach Out!
                </div>
                <div className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div className={styles.containercontent}>
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
                        <Image src="/../public/icons/phone.png" className={styles.icon} alt="phone icon" width={'18%'} height={'18%'} />
                        <div className={styles.subheading}> (123) 456-7890 </div>
                        <br></br>
                        <Image src="/../public/icons/mail.png" className={styles.icon} alt="mail icon" width={'20%'} height={'22%'} />
                        <div className={styles.subheading}> artruismatdavis@gmail.com </div>
                    </div>
                    <div className={styles.containerconnectsocials}>
                        <a href="http://facebook.com">
                            <Image src="/../public/icons/facebook.png" className={styles.icon} alt="facebook icon" width={'15%'} height={'25%'} />
                        </a>
                        <a href="http://instagram.com">
                            <Image src="/../public/icons/instagram.png" className={styles.icon} alt="instagram icon" width={'25%'} height={'25%'} />
                        </a>
                        <a href="http://twitter.com">
                            <Image src="/../public/icons/twitter.png" className={styles.icon} alt="twitter icon" width={'26%'} height={'23%'} />
                        </a>
                    </div>
                </div>

                <div className={styles.containerform}>
                <form id="newForm">
                    <div className={styles.containerfirstname}>
                        <div className={styles.formlabel}> First name </div>
                        <input
                            id={"firstName"}
                            type="text"
                            onKeyDown={(e) => { changefncolor }} 
                            onChange={(e)=>{setFirstName(e.target.value)}} name='firstName'
                            className={styles.formhalf}
                        />
                    </div>

                    <div className={styles.containerlastname}>
                        <div className={styles.formlabel}> Last name </div>
                        <input
                            type="text"
                            onChange={(e)=>{setLastName(e.target.value)}} name='lastName'
                            className={styles.formhalf}
                        />
                    </div>
                    <br></br>
                    <div className={styles.containeremail}>
                        <div className={styles.formlabel}> UC Davis email </div>
                        <input
                            type="text"
                            onChange={(e)=>{setEmail(e.target.value)}} name='email'
                            className={styles.formhalf}
                        />
                    </div>

                    <div className={styles.containerphone}>
                        <div className={styles.formlabel}> Phone number </div>
                        <input
                            type="text"
                            onChange={(e) => { setNumber(e.target.value) }} name='number'
                            className={styles.formhalf}
                        />
                    </div>

                    <div className={styles.containerreason}>
                        <div className={styles.formlabel}> Reason for contact </div>
                        <input
                            type="text"
                            onChange={(e)=>{setReason(e.target.value)}} name='reason'
                            className={styles.formfull}
                        />
                    </div>

                    <div className={styles.containernotes}>
                        <div className={styles.formlabel}> Additional notes </div>
                        <input
                            type="text"
                            onChange={(e)=>{setNotes(e.target.value)}} name='notes'
                            className={styles.formfull}
                        />
                    </div>

                    <div className={styles.containerbuttons}>
                        <button 
                            type="button" 
                            onClick={(e) => { clearForm() }} 
                            className={styles.buttonclear} > 
                            Clear Form 
                        </button>

                        <button
                            type="submit"
                            onClick={(e) => { handleSubmit(e) }}
                            className={styles.buttonsubmit} >
                            Submit Form
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
