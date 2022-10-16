import React from 'react'
import styles from "./TimeNap.module.css"

const TimeNap = () => {
    return (
        <div class="card mb-4" id={styles.card}>
            <div class="row g-0" className={styles.cardHead}>
                <div class="col-md-4" id={styles.container}>
                    <img className={styles.iNap} src='https://i.imgur.com/ybWvj8i.png'></img>
                    <h5 class="card-title">Pufi NAP</h5>
                    <p class="card-text">Descripción del producto. Este es un producto</p>
                    <div className={styles.VerMas}><img className={styles.signo} src='https://i.imgur.com/WHZfI4n.png' alt="signo mayor que"></img>  VER MAS</div>
                </div>
            </div>
            <div class="col-md-4">
                <div className={styles.cardBody}>
                    <div className={styles.content}></div>
                    <img className={styles.imgCard} src="https://i.imgur.com/RPPk22G.png" alt="bolsa de compras"></img>
                    <button className={styles.button}>SHOP</button>
                </div>
            </div>
        </div>
        
    )
}

export default TimeNap