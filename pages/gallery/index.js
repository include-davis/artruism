import Title from '../../components/gallery/title'
import Artwork from '../../components/gallery/artwork'
import DetailButton from '../../components/gallery/detail_button'

import styles from '../../styles/gallery/index.module.css'

function Gallery() {
    return (
        <div className={styles.container}>
            <Title />
            <Artwork />
            <DetailButton />
        </div>
    );
}

export default Gallery;