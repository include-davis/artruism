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
                    <li><Link href="/"><a className={styles.navlink}>Home</a></Link></li>
                    <li><Link href="#about"><a className={styles.navlink}>About Us</a></Link></li>
                    <li><Link href="#gallery"><a className={styles.navlink}>Gallery</a></Link></li>
                    <li><Link href="#calendar"><a className={styles.navlink}>Events</a></Link></li>
                    <li><Link href="#contact"><a className={styles.navlink}>Contact</a></Link></li>
                </ul>

                <div className={styles.hamburger_icon}>
                <Image src="/../public/hamburger_icon.png" alt="icon" width='70%' height='70%' objectFit='contain'/>
                </div>
            </div>

            
            <div className={styles.side_navbar}>
                <ul>
                    <li><Link href="/"><a class={styles.sidenavlink}>Home</a></Link></li>
                    <li><Link href="#about"><a class={styles.sidenavlink}>About Us</a></Link></li>
                    <li><Link href="#gallery"><a class={styles.sidenavlink}>Gallery</a></Link></li>
                    <li><Link href="#calendar"><a class={styles.sidenavlink}>Events</a></Link></li>
                    <li><Link href="#join"><a class={styles.sidenavlink}>Join Us</a></Link></li>
                    <li><Link href="#contact"><a class={styles.sidenavlink}>Contact</a></Link></li>
                </ul>
            </div>

        

            <div className={styles.buttonContainer}>
                <div className={styles.up_arrow}>
                    <Link href="#top"><Image src="/../public/up_arrow.png" alt="icon" width='50%' height='50%' objectFit='contain'/></Link>
                </div>
                <div>
                    <Link href="#top" ><a className={styles.sidenavlink}>Back to Top</a></Link>
                </div>
            </div>

        </div>

    )
}

export default Nav