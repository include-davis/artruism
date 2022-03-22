import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className = {styles.logo}>
                    <div className = {styles.logoIcon}>
                    <Image src="/../public/artruism_logo.png" alt="icon" width='100%' height='100%' objectFit='contain'/>
                    </div>

                    <div className={styles.logoText}>
                        Artruism at UC Davis
                        <div className={styles.logoSubText}>
                        Student Oraganization at
                        </div>

                        <div className={styles.logoSubHeadingText}>
                            University of California, Davis
                        </div>
                    </div>
                </div>

                <ul className={styles.navMenu}>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="#about"><a>About Us</a></Link></li>
                    <li><Link href="#gallery"><a>Gallery</a></Link></li>
                    <li><Link href="#contact"><a>Contact</a></Link></li>
                </ul>


                <div className={styles.twitterLogo}>
                    <Image src="/../public/facebook_logo.png" alt="icon" width='100%' height='100%' objectFit='contain'/>
                    <Image src="/../public/instagram.png" alt="icon" width='100%' height='100%' objectFit='contain'/>
                    <Image src="/../public/twitter.png" alt="icon" width='100%' height='100%' objectFit='contain'/>
                </div>

                <div className={styles.credit}>
                    Designed and Developed with &#10084;
                    <br />
                    by <span className={styles.creditBold}>#include @ Davis</span>
                </div>
            </div>
        </div>
    )
}

export default Footer