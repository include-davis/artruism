import {FaSearch} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

import selectedPerson from "../../../pages/gallery/selectedPerson";

import styles from '../../../styles/gallery/detail/artwork.module.css'

function Artwork() {
    let hpPeople = [];

    const loadPeople = async () => {
        try {
            const res = await fetch('https://hp-api.herokuapp.com/api/characters');
            hpPeople = await res.json();
            displayPeople(hpPeople);
        } catch(err) {
            console.error(err);
        }
    };

    function selectPerson(person) {
        console.log("bye");
        selectedPerson = person;
    }

    const displayPeople = (people) => {
        const peopleList = document.getElementById('peopleList');
        people.forEach(person => {
            const image = document.createElement('img');
                image.onClick = selectPerson(person);
                image.src = person.image;
                
                peopleList.appendChild(image);
        });

        /*
        const inside = people
            .map((person) => {
                return `
                    <img src=${person.image}></img>
                `;
            })
            .join('');
        peopleList.innerHTML = inside;
        */
    };

    loadPeople();

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <FaSearch />
                <input id={styles.searchBar} placeholder="Search by artist name or title"></input>
                <FaTimes />
            </div>
            <div id="peopleList" className={styles.peopleList}></div>
        </div>
    )
}

export default Artwork