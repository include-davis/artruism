import Link from "next/link"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from '../../../styles/gallery/index/detail_button.module.css'

function DetailButton() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos="fade">
            <Link href="/gallery/detail">
                <a className={styles.button}>View All Artworks</a>
            </Link>
        </div>
    )
}

export default DetailButton