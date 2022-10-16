import React from 'react'
import styles from "./TimeRain.module.css"

const TimeRain = () => {
    return (
        <div class="card mb-4" id={styles.card}>
            <div class="row g-0" className={styles.cardHead}>
                <div class="col-md-4" id={styles.container}>
                   <img className={styles.imgFluid} src="https://i.imgur.com/pgxAybD.png" alt="niños con sombrilla"></img>
                   <button className={styles.button}>SHOP</button>
                </div>
            </div>
            <div class="col-md-4">
                <div  className={styles.cardBody}>
                    <div className={styles.content}>
                        <img className={styles.sombrilla} src="https://i.imgur.com/draY3Hg.png" alt="sombrilla"></img> 
                        <h5 class="card-title">Pufi RAIN</h5>
                        <p class="card-text">Descripción del producto. Este es un producto</p>
                        <div className={styles.VerMas}><img className={styles.signo} src='https://i.imgur.com/WHZfI4n.png' alt="signo mayor que"></img>  VER MAS</div>
                    </div>
                </div>
           </div>
        </div>
        
    )
}

export default TimeRain