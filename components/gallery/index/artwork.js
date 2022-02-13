import Image from 'next/image'
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from '../../../styles/gallery/index/artwork.module.css'

function Artwork() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.container}>
            <div data-aos="fade" className={styles.panel}>
                <Image src="/../public/picture.png" alt="artwork" width={273} height={316} objectFit='cover'/>
                <div className={styles.description}>
                    <h3>Title of Artwork</h3>
                    <p>Name of Artist</p>
                </div>
            </div>
            <div data-aos="fade" data-aos-delay="150" className={styles.panel}>
                <Image src="/../public/picture.png" alt="artwork" width={273} height={316} objectFit='cover'/>
                <div className={styles.description}>
                    <h3>Title of Artwork</h3>
                    <p>Name of Artist</p>
                </div>
            </div>
            <div data-aos="fade" data-aos-delay="300" className={styles.panel}>
                <Image src="/../public/picture.png" alt="artwork" width={273} height={316} objectFit='cover'/>
                <div className={styles.description}>
                    <h3>Title of Artwork</h3>
                    <p>Name of Artist</p>
                </div>
            </div>
        </div>
    )
}

export default Artwork