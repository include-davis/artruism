import styles from '../styles/nav.module.css'
import Image from 'next/image'

function Nav() {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className = {styles.logo}>
                    <div className = {styles.logoIcon}>
                    <Image src="/../public/artruism_logo.png" alt="icon" width='100%' height='100%' objectFit='contain'/>
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
            <div className={styles.side_navbar}>
                <ul>
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