import Link from "next/link";
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from '../../../styles/gallery/detail/artwork.module.css'

function Title() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos="fade" className={styles.container}>
            <Link href="/gallery/">
                <a className={styles.home}>&lt; Back to Home</a>
            </Link>
            <h1>Art Gallery</h1>
            <p>Description</p>
        </div>
    )
}

export default Title