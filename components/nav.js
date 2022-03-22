import styles from '../styles/nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '../pages/contact'

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
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="#about"><a>About Us</a></Link></li>
                    <li><Link href="#gallery"><a>Gallery</a></Link></li>
                    <li><Link href="#calendar"><a>Events</a></Link></li>
                    <li><Link href="#contact"><a>Contact</a></Link></li>
                </ul>
            </div>
            <div className={styles.side_navbar}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="#about"><a>About Us</a></Link></li>
                    <li><Link href="#gallery"><a>Gallery</a></Link></li>
                    <li><Link href="#calendar"><a>Events</a></Link></li>
                    <li><Link href="#join"><a>Join Us</a></Link></li>
                    <li><Link href="#contact"><a>Contact</a></Link></li>
                </ul>
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.up_arrow}>
                    <Link href="#top"><Image src="/../public/up_arrow.png" alt="icon" width='50%' height='50%' objectFit='contain'/></Link>
                </div>
                <div>
                    <Link href="#top">Back to top</Link>
                </div>
            </div>

        </div>

    )
}

export default Nav