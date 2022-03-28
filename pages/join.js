import Head from 'next/head'
import styles from '../styles/join.module.css'

function Join() {
    return (
        <div className={styles.join}>
            <Head>
                <title>Join - Artruism at UC Davis</title>
            </Head> 
            <title>Start Drawing for a Difference, Today.</title>   

            <div className={styles.joinimg}>
                <img id="join-us-img" src="/joinus.png">
                </img>
            </div>

            <div className={styles.description}>
                    <p>
                    Lörem ipsum terasonde niktig i trera. Prens androfiering. 
                    Vangen pres, och biosocial. Beling pappafeminist intralingar.                     Cosplay prens ötida fotosion. Rest kippavandring såsom kärrtorpa, 
                    att novellix. Ultrade fåbeligt inte laska: men besat. Nyvmoren Lörem 
                    ipsum terasonde niktig i trera. Prens androfiering. Vangen pres, och 
                    biosocial. Beling pappafeminist intralingar. Cosplay prens ötida 
                    fotosion. Rest kippavandring såsom kärrtorpa, att novellix. Ultrade                     fåbeligt inte laska: men besat. Nyv moren Lörem ipsum terasonde niktig 
                    i trera. Prens androfiering. Vangen pres, och biosocial. Beling pappafeminist in
                    </p>
            </div>
            <div className={styles.button_container}>
                <button> 
                    <p>Join Our Team!</p>
                </button>
                <button>
                    <p>Upcoming Events</p>
                </button>
                <button> 
                    <p>Another Interesting CTA</p>
                </button>
            </div>
        </div>                
    )
}

export default Join
