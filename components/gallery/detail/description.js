import styles from '../../../styles/gallery/detail/description.module.css'

function Description() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <div className={styles.navigation}>
                    <button className={styles.button}>&lt; Previous</button>
                    <button className={styles.button}>Next &gt;</button>
                </div>
                <h1>Art Title</h1>
                <p>By Artist:</p>
                <p>Date:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu.</p>
            </div>
        </div>
    )
}

export default Description