import styles from '../styles/nav.module.css'
import Image from 'next/image'

function Nav() {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className = {styles.logo}>
                    <div className = {styles.logoIcon}>
                    <Image src="/../public/favicon.ico" alt="icon" width={56} height={54.55} objectFit='cover'/>
                    </div>
                    Artruism at UC Davis
                </div>

                <ul className={styles.navMenu}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Gallery</li>
                    <li>Events</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>

    )
}

export default Nav