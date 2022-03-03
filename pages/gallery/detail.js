import Head from "next/head"

import Nav from '../../components/nav'
import Artwork from '../../components/gallery/detail/artwork'

import styles from "../../styles/gallery/detail.module.css"

function DetailView() {
    return (
        <div className={styles.container}>
            <style>@import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');</style>
            <Head>
                <title>Artruism at UC Davis | Art Gallery</title>
            </Head>
            <div className={styles.container2}>
                <div className={styles.container3}>
                    <Artwork />
                </div>
            </div>
        </div>
    )
}

export default DetailView
