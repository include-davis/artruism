import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from '../../../styles/gallery/index/title.module.css'

function Title() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <h1 data-aos="fade" className={styles.title}>Art Gallery</h1>
            <p data-aos="fade" className={styles.description}>Here are some artworks from the quarter.</p>
        </div>
    )
}

export default Title