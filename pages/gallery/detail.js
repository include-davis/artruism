import Link from "next/link";
import Head from "next/head";

function Title() {
    return (
        <div className="artwork">
            <Link href="./ArtGallery.js">
                <a>Back to Home</a>
            </Link>
            <h1>Art Gallery</h1>
            <p>Description</p>
            <input className="search-bar" placeholder="Search by artist name or title"></input>
        </div>
    )
}

function Artwork() {
    return (
        <div>

        </div>
    )
}

function Description() {
    return (
        <div className="detail">
            <div className="navigation">
                <button>Previous</button>
                <button>Next</button>
            </div>
            <div className="description">
                <h1>Art Title</h1>
                <p>By Artist:</p>
                <p>Date:</p>
                <p>Description</p>
            </div>
        </div>
    )
}

function DetailView() {
    return (
        <div className="container">
            <Head>
                <title>Artruism | Art Gallery</title>
            </Head>
            <Nav />
            <Title />
            <Artwork />
            <Description />
        </div>
    )
}

export default DetailView