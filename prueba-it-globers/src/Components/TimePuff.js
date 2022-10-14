import React from 'react'
import styles from "./TimePuff.module.css"

const TimePuff = () => {
    return (
        <div class="card mb-3" id={styles.card}>
            <div class="row g-0"className={styles.cardHead}>
                <div class="col-md-4" id={styles.container}>
                    <div className={styles.contPuffi}>
                        <img src='https://i.imgur.com/2hxfk21.png'></img>
                    </div>
                    <h5 class="card-title">Pufi PUFF</h5>
                    <p class="card-text">Descripción del producto. Este es un producto</p>
                    <div className={styles.VerMas}><img className={styles.signo} src='https://i.imgur.com/WHZfI4n.png' alt="signo mayor que"></img>  VER MAS</div>
                </div>
            </div>
            <div class="col-md-8">
                <div className={styles.cardBody}>
                    <div className={styles.content}>
                      <button className={styles.button}>SHOP</button>
                      <img className={styles.imgCard} src="https://i.imgur.com/3axaU92.jpg" alt="mujer en un puff"></img> 
                    </div>
                </div> 
           </div>
        </div>
        
    )
}

export default TimePuff