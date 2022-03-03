import { FaSearch, FaTimes } from "react-icons/fa"
import { useState, useEffect } from "react"
import Link from "next/link"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from "../../../styles/gallery/detail/artwork.module.css"

function Artwork() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
        loadPeople();
    }, []);

    let hpPeople = [];

    const harry = {
        name: "Click on a piece to learn more!"
    }
    
    const [people, setPeople] = useState([])
    const [featuredPerson, setFeaturedPerson] = useState(harry)
    const [searchTerm, setSearchTerm] = useState("")
    const [click, setClick] = useState('false');

    const handleClick = () => {
        if (click === 'false') {
            setClick('true');
        } else {
            setClick('false');
        }
    }

    // loadPeople won't be required if the art is just going to be directly put into an array.
    const loadPeople = async () => {
        try {
            const res = await fetch('https://hp-api.herokuapp.com/api/characters');
            hpPeople = await res.json();
            setPeople(hpPeople)
        } catch(err) {
            console.error(err);
        }
    };

    const FeaturedTile = () => {
        console.log(click)
        return (
            <div>
                <h1>{featuredPerson.name}</h1>
                <p>{featuredPerson.house}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu.</p>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div data-aos="fade" className={styles.container}>
                    <Link href="/">
                        <a className={styles.home}>&lt; Back to Home</a>
                    </Link>
                    <h1>Art Gallery</h1>
                    <p>Description</p>
                </div>
                <div data-aos="fade" className={styles.search}>
                    <FaSearch />
                    <input 
                        type="text"
                        id="searchBar"
                        className={styles.searchBar}
                        placeholder="Search by artist name or title"
                        value={searchTerm}
                        onInput={e => setSearchTerm(() => e.target.value)}
                    />
                    <FaTimes onClick={() => setSearchTerm("")}/>
                </div>
                <div data-aos="fade" data-aos-delay="150" className={styles.peopleList}>
                    {people.filter(person => {
                        if (searchTerm === "") {
                            return person; 
                        } else if (person.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return person;
                        }
                    }).map(person => {
                        return (
                            <div onClick={() => {
                                    setFeaturedPerson(person);
                                    setClick('true')
                                }
                            }>
                                <img src={person.image} alt={person.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div data-aos="fade" data-aos-delay="300" className={styles.description} visible={click}>
                <FaTimes className={styles.exit} onClick={handleClick} size={35} visible={click}/>
                <img className={styles.image} src={featuredPerson.image} visible={click}/>
                <FeaturedTile />
            </div>
        </div>
    )
}

export default Artwork