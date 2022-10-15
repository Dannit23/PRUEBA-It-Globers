import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className="col-1" id={styles.colum1}>
                <img className={styles.logo} src='https://i.imgur.com/xreXa6i.png' alt='Logo'></img>
                <a href="#timeRain">PUFI RAIN</a>
                <a href="#timePuff">PUFI PUFF</a> 
                <a href="#timeCart">PUFI CART</a> 
                <a href="#timeNap">PUFI NAP</a>
            </div>
            <div className="col-2">
                <a href="#">CONTACTO</a>
                <a href="#">AYUDA</a> 
                <a href="#">CÓMO COMPRAR</a> 
                <a href="#">TÉRMINOS Y CONDICIONES</a>
            </div>
            <div className="col-3" id={styles.colum3}>
                <a href="#">COMPRA 100% SEGURA</a>
                <img className={styles.qr} src='https://i.imgur.com/JTrfxyf.png' alt='Código QR'></img>
                <img className={styles.protegida} src='https://i.imgur.com/S8Yd88h.png' alt='Logo compra protegida'></img>
                <h6>COMPRÁ CON LA GARANTÍA DE PUFI</h6>
            </div>
            <div className="col-4">
                <h6>SIGUENOS EN</h6>
                <a href="https://es-la.facebook.com/"><img src='https://i.imgur.com/rNJSpcT.png' alt="logo facebook" /></a>
                <a href="https://twitter.com/?lang=es"><img src='https://i.imgur.com/3ykaYLG.png' alt="logo twitter" /></a>
                <a href="https://www.instagram.com/"><img src='https://i.imgur.com/57qgERL.png' alt="logo instagram" /></a>   
            </div>       
            
        </div>    
    );
};

export default Footer