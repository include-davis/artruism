import Link from "next/link"

import styles from '../../styles/gallery/detail_button.module.css'

function DetailButton() {
    return (
        <Link href="/detail.js">
            <a className={styles.button}>View All Artworks</a>
        </Link>
    )
}

export default DetailButton