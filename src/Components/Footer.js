import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <section className={styles.container}>
                <div className="col-1" id={styles.sec1}>
                    <div>
                       <img className={styles.logo} src='https://i.imgur.com/xreXa6i.png' alt='Logo'></img>
                    </div>
                </div>
                <div className="col-1" id={styles.sec2}>
                    <div className={styles.listProduct}>
                        <ul className={styles.list}>
                            <li><a href="#timeRain"> PUFI RAIN </a></li>
                            <li><a href="#timePuff"> PUFI PUFF </a></li> 
                            <li><a href="#timeCart"> PUFI CART </a></li> 
                            <li><a href="#timeNap"> PUFI NAP </a></li>
                        </ul>
                    </div>
                </div>          
                <div className="col-2" id={styles.sec3}>
                   <a href="#"> CONTACTO </a>
                   <a href="#"> AYUDA </a> 
                   <a href="#"> CÓMO COMPRAR </a> 
                   <a href="#"> TÉRMINOS Y CONDICIONES </a>
                </div>
                <div className="col-3" id={styles.sec4}>
                    <a href="#">COMPRA 100% SEGURA</a>
                    <div className={styles.csecure}>
                       <img className={styles.qr} src='https://i.imgur.com/JTrfxyf.png' alt='Código QR'></img>
                       <img className={styles.protected} src='https://i.imgur.com/S8Yd88h.png' alt='Logo compra protegida'></img>
                       <h6>COMPRÁ CON LA GARANTÍA DE PUFI</h6>
                    </div>
                </div>
                <div className="col-4" id={styles.sec5}>
                   <h6>SIGUENOS EN</h6>
                   <a href="https://es-la.facebook.com/"><img className={styles.logos} src='https://i.imgur.com/rNJSpcT.png' alt="logo facebook" /></a>
                   <a href="https://twitter.com/?lang=es"><img className={styles.logos} src='https://i.imgur.com/3ykaYLG.png' alt="logo twitter" /></a>
                   <a href="https://www.instagram.com/"><img className={styles.logos} src='https://i.imgur.com/57qgERL.png' alt="logo instagram" /></a>   
                </div> 
            </section>
            <section className={styles.copy}>
                <div>
                  <p>PUFI Copyright 2022 - Todos los derechos reservados</p>
                </div>
                <div>
                   <img className={styles.logoBrand} src='https://i.imgur.com/ar0D3Q4.png' alt='logo BrandLive'></img> 
                </div> 
            </section>
            
        </div> 
        
    );
};

export default Footer