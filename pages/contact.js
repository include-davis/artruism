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

function Contact() {
    return (
      <div className={styles.container}>
        <style>@import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');</style>
        
        <Head>
            <title>Artruism at UC Davis | Contacy Us</title>
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
                        artruismatdavis@gmail.com 
                    </div>
                </div>
            </div>
            <div className={styles.containerconnectsocials}>
                    
            </div>
        </div>

        <div className={styles.containerform}>
            <div className={styles.containerfirstname}>
                <div className={styles.formlabel}> First name </div>
                    <input 
                        type="text"
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containerlastname}>
                <div className={styles.formlabel}> Last name </div>
                    <input 
                        type="text"
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containeremail}>
                <div className={styles.formlabel}> UC Davis email </div>
                    <input 
                        type="text"
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containerphone}>
                <div className={styles.formlabel}> Phone number </div>
                    <input 
                        type="text"
                        className={styles.formhalf}
                    />
            </div>

            <div className={styles.containerreason}>
                <div className={styles.formlabel}> Reason for contact </div>
                    <input 
                        type="text"
                        className={styles.formfull}
                    />
            </div>

            <div className={styles.containernotes}>
                <div className={styles.formlabel}> Additional notes </div>
                    <input 
                        type="text"
                        className={styles.formfull}
                    />
            </div>

        </div>
      </div>
        /* <Head>
          <title>"Questions? Reach Out!"</title>
        </Head>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
     
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
          </form >  */
        
    )
}

export default Contact
