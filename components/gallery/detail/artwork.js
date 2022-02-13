import {FaSearch} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import { useState, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from "../../../styles/gallery/detail/artwork.module.css"

function Artwork() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    const [searchTerm, setSearchTerm] = useState("");

    let hpPeople = [];

    // loadPeople won't be required if the art is just going to be directly put into an array.
    const loadPeople = async () => {
        try {
            const res = await fetch('https://hp-api.herokuapp.com/api/characters');
            hpPeople = await res.json();
            displayPeople(hpPeople);
        } catch(err) {
            console.error(err);
        }
    };

    const FeaturedTile = () => {
        return (
            <div>
                <h1>{featuredPersonName}</h1>
                <p>{featuredPersonHouse}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu.</p>
            </div>
        )
    }

    // FIXME: search bar currently not working
    // const searchBar = document.getElementById('searchBar');

    // searchBar.addEventListener('keyup', (input) => {
    //     const searchString = input.target.value.toLowerCase();

    //     const filteredPeople = hpPeople.filter((person) => {
    //         return (
    //             person.name.toLowerCase().includes(searchString)
    //         );
    //     });
    //      displayPeople(filteredPeople);
    // });

    function clearInput() {
        const searchBar = document.getElementById('searchBar');
        searchBar.value = "";
    }

    const displayPeople = (people) => {
        const peopleList = document.getElementById('peopleList');
        hpPeople
            .filter(person => {
                if (searchTerm == "") {
                    return person;
                } else if (person.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return person;
                }
            })
            .forEach(person => {
                // return (
                //     <div onClick={() => {setFeaturedPersonName(person.name), setFeaturedPersonHouse(person.house)}}>
                //         <img src={person.image}></img>
                //     </div>
                // )
                const imageDiv = document.createElement('div');
                const image = document.createElement('img');
                imageDiv.onClick = () => {
                    setFeaturedPersonName(person.name);
                    setFeaturedPersonHouse(person.house);
                }
                image.src = person.image;
                imageDiv.appendChild(image);
                peopleList.appendChild(imageDiv);
            })
    };

    loadPeople();

    const [featuredPersonName, setFeaturedPersonName] = useState("Name") // hpPeople[0].name doesn't work, not defined yet, this should work when we have an image array
    const [featuredPersonHouse, setFeaturedPersonHouse] = useState("House") // hpPeople[0].house doesn't work, not defined yet

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.search}>
                    <FaSearch />
                    <input 
                        id="searchBar"
                        className={styles.searchBar}
                        placeholder="Search by artist name or title"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                            displayPeople(hpPeople);
                        }}
                    />
                    <FaTimes onClick={clearInput}/>
                </div>
                <div data-aos="fade" data-aos-delay="150" id="peopleList" className={styles.peopleList}></div>
            </div>
            <div data-aos="fade" data-aos-delay="300" className={styles.container2}>
                <div className={styles.description}>
                    <div className={styles.navigation}>
                        <button className={styles.button}>&lt; Previous</button>
                        <button className={styles.button}>Next &gt;</button>
                    </div>
                    <FeaturedTile />
                </div>
            </div>
        </div>
    )
}

export default Artwork