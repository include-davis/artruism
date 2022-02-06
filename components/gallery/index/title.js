import styles from '../../../styles/gallery/index/title.module.css'

function Title() {
    return (
        <div>
            <h1 className={styles.title}>Art Gallery</h1>
            <p className={styles.description}>Here are some artworks from the quarter.</p>
        </div>
    )
}

export default Title