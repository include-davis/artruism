import Head from "next/head"
import styles from "../styles/about.module.css"

import { FaFacebook, FaInstagram, Fainstagram, FaLinkedin, Falinkedin } from 'react-icons/fa';

function About() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>About Us</title>
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous" />
        {/* Add CSS File*/}
        <link href="about.module.css" rel="stylesheet" type="text/css" />
        {/* Optional JavaScript; choose one of the two! */}
        {/* Option 1: Bootstrap Bundle with Popper */}
        {/* Option 2: Separate Popper and Bootstrap JS */}
        {/*
    
    
    */}
        <br />
        <section className="gallery-block cards-gallery">
          <div className={styles.container}>
            <div className={styles.heading}>
              <h1 className={styles.about}> About Us</h1>
              <p className={styles.aboutsubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus mauris ut facilisis maximus. Suspendisse potenti.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-3 col-sm-2">
                <div className="card border-dark transform-on-hover">
                  <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
                  <div className="card-body">
                    <h3>Name 1</h3>
                    <p className="text-muted card-text">Designer Name</p>{/* Facebook */}
                    <FaFacebook/>
                    {/* Instagram */}
                    <FaInstagram/>
                    {/* Linkedin */}
                    <FaLinkedin/>
                  </div>
                </div><br />
              </div>
              <div className="col-sm-3 col-sm-2">
                <div className="card border-dark transform-on-hover">
                  <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
                  <div className="card-body">
                    <h3>Name 2</h3>
                    <p className="text-muted card-text">Designer Name</p>
                    {/* Facebook */}
                    <FaFacebook/>
                    {/* Instagram */}
                    <FaInstagram/>
                    {/* Linkedin */}
                    <FaLinkedin/>
                  </div>
                </div><br />
              </div>
              <div className="col-sm-3 col-sm-2">
                <div className="card border-dark transform-on-hover">
                  <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
                  <div className="card-body">
                    <h3>Name 3</h3>
                    <p className="text-muted card-text">Designer Name</p>
                    {/* Facebook */}
                    <FaFacebook/>
                    {/* Instagram */}
                    <FaInstagram/>
                    {/* Linkedin */}
                    <FaLinkedin/>
                  </div>
                </div><br />
              </div>
              <div className="row justify-content-center"><br />
                <div className="col-sm-3 col-sm-2">
                  <div className="card border-dark transform-on-hover">
                    <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3>Name 4</h3>
                      <p className="text-muted card-text">Designer Name</p>{/* Facebook */}
                      <FaFacebook/>
                    {/* Instagram */}
                    <FaInstagram/>
                    {/* Linkedin */}
                    <FaLinkedin/>
                    </div>
                  </div><br />
                </div>
                <div className="col-sm-3 col-sm-2">
                  <div className="card border-dark transform-on-hover">
                    <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3>Name 5</h3>
                      <p className="text-muted card-text">Designer Name</p>{/* Facebook */}
                      <FaFacebook/>
                    {/* Instagram */}
                    <FaInstagram/>
                    {/* Linkedin */}
                    <FaLinkedin/>
                    </div>
                  </div><br />
                </div>
                <div className="col-sm-3 col-sm-2">
                  <div className="card border-dark transform-on-hover">
                    <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3>Name 6</h3>
                      <p className="text-muted card-text">Designer Name</p>{/* Facebook */}
                      <FaFacebook/> 
                    {/* Instagram */}
                    <FaInstagram/> 
                    {/* Linkedin */}
                    <FaLinkedin/>
                    </div>
                  </div><br />
                </div>
              </div>
            </div></div></section><br />
      </div>
    );
}

export default About