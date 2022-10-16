import React from 'react'
import Contact from './Contact'
import styles from "./Espufi.module.css";

const Espufi = () => {
    return (
        <div class="seccion-espufi">
           <h6>INSTAGRAM</h6>
           <h2>#ESPUFI</h2>
           <span>
                <img className={styles.collage} src="https://i.imgur.com/VTk4jza.jpg" alt="collage"></img>
            </span>
            <div className={styles.datos}>
               <h6>NEWSLETTER</h6>
               <h2>SUSCRIBITE</h2>
               <h6>Y enterate de todas las novedades</h6>
            </div>
            <div>
              <Contact />
            </div>
        </div> 
    )
}

export default Espufi 