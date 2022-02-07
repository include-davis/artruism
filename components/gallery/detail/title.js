import Link from "next/link";

import styles from '../../../styles/gallery/detail/artwork.module.css'

function Title() {
    return (
        <div className={styles.container}>
            <Link href="/gallery/">
                <a className={styles.home}>&lt; Back to Home</a>
            </Link>
            <h1>Art Gallery</h1>
            <p>Description</p>
        </div>
    )
}

export default Title