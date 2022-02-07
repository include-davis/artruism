import Title from '../../components/gallery/index/title'
import Artwork from '../../components/gallery/index/artwork'
import DetailButton from '../../components/gallery/index/detail_button'

import styles from '../../styles/gallery/index.module.css'

function Gallery() {
    return (
        <div className={styles.container}>
            <Title />
            <div className={styles.container2}>
                <Artwork />
                <DetailButton />
            </div>
        </div>
    );
}

export default Gallery;