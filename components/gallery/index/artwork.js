import Image from 'next/image'

import styles from '../../../styles/gallery/index/artwork.module.css'

function Artwork() {
    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <Image src="/../public/picture.png" alt="artwork" width={273} height={316} objectFit='cover'/>
                <div className={styles.description}>
                    <h3>Title of Artwork</h3>
                    <p>Name of Artist</p>
                </div>
            </div>
            <div className={styles.panel}>
                <Image src="/../public/picture.png" alt="artwork" width={273} height={316} objectFit='cover'/>
                <div className={styles.description}>
                    <h3>Title of Artwork</h3>
                    <p>Name of Artist</p>
                </div>
            </div>
            <div className={styles.panel}>
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