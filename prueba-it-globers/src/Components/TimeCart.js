import React from 'react'
import styles from "./TimeCart.module.css"

const TimeCart = () => {
    return (
        <div class="card mb-3" id={styles.card}>
            <div class="row g-0" className={styles.cardHead}>
                <div class="col-md-4" id={styles.container}>
                  <button className={styles.button}>SHOP</button>
                  <img className={styles.imgFluid} src="https://i.imgur.com/Qy7RXn1.jpg" alt="bolsa de compras"></img>
                </div>
            </div>
            <div class="col-md-8">
                <div className={styles.cardBody}>
                    <div className={styles.contBolsa}>
                        <img className={styles.bolsa} src="https://i.imgur.com/FcPwltT.png" alt="bolsa de compras"></img>  
                    </div>
                    <h5 class="card-title">Pufi CART</h5>
                    <p class="card-text">Descripción del producto. Este es un producto</p>
                    <div className={styles.VerMas}><img className={styles.signo} src='https://i.imgur.com/WHZfI4n.png' alt="signo mayor que"></img>  VER MAS</div>
                </div>
            </div>
        </div>
        
    )
}

export default TimeCart