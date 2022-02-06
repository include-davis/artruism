import Link from "next/link"

import styles from '../../../styles/gallery/index/detail_button.module.css'

function DetailButton() {
    return (
        <Link href="/gallery/detail">
            <a className={styles.button}>View All Artworks</a>
        </Link>
    )
}

export default DetailButton