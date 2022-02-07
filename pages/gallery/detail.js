import Head from "next/head"

import Nav from '../../components/nav'
import Title from '../../components/gallery/detail/title'
import Artwork from '../../components/gallery/detail/artwork'
import Description from '../../components/gallery/detail/description'

import styles from "../../styles/gallery/detail.module.css"

function DetailView() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Artruism | Art Gallery</title>
            </Head>
            <Nav />
            <div className={styles.container2}>
                <div className={styles.container3}>
                    <Title />
                    <Artwork />
                </div>
                <Description />
            </div>
        </div>
    )
}

export default DetailView
