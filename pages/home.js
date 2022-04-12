import Head from 'next/head'
import styles from '../styles/homepage.module.css'


function Homepage() {
    return(
        <div className={styles.home_container}>
            <Head>
                <title>Artruism</title>
            </Head>
            
            <div className={styles.home_headerContainer}>    
                <h1 className={styles.home_header}>DRAWING FOR A DIFFERENCE</h1>
            </div>

            <div className={styles.home_mainContent} >
                <img className={styles.home_logo} src="../public/artruism_logo.png"></img>
                <div className={styles.home_copytext}>
                    <h2>Artruism @ UC Davis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class={styles.home_button_container}>
                        <button>
                            <p>Join Our Team!</p>
                        </button>
                        <button>
                            <p>Upcoming Events</p>
                        </button>   
                    </div>    
                </div>
            </div>
            <div className={styles.downArrow}>
                <p>Learn More<br/>v</p>
            </div>
        </div>
    )

}

export default Homepage