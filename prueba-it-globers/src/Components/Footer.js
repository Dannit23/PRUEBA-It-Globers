import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                {/*fila1*/}
                <div className="row">
                 {/*columna1*/}
                    <div className="col">
                       <img src='https://i.imgur.com/xreXa6i.png' alt='Logo'></img>
                        <a href="#timeRain">PUFI RAIN</a>
                        <a href="#timePuff">PUFI PUFF</a> 
                        <a href="#timeCart">PUFI CART</a> 
                        <a href="#timeNap">PUFI NAP</a>
                    </div>
                     {/* Column2 */}
                    <div className="col">
                        <a href="#">CONTACTO</a>
                        <a href="#">AYUDA</a> 
                        <a href="#">CÓMO COMPRAR</a> 
                        <a href="#">TÉRMINOS Y CONDICIONES</a>
                    <div/>
                    </div>
                     {/* Column3 */}
                    <div className="col">
                        <a href="#">COMPRA 100% SEGURA</a>
                        <img src='https://i.imgur.com/JTrfxyf.png' alt='Código QR'></img>
                        <img src='https://i.imgur.com/S8Yd88h.png' alt='Logo compra protegida'></img>
                        <h6>COMPRÁ CON LA GARANTÍA DE PUFI</h6>
                    </div>
                    {/* Column4 */}
                    <div className="col">
                        <h6>SIGUENOS EN</h6>
                        <a href="https://es-la.facebook.com/"><img src='https://i.imgur.com/rNJSpcT.png' alt="logo facebook" /></a>
                        <a href="https://twitter.com/?lang=es"><img src='https://i.imgur.com/3ykaYLG.png' alt="logo twitter" /></a>
                        <a href="https://www.instagram.com/"><img src='https://i.imgur.com/57qgERL.png' alt="logo instagram" /></a>   
                    </div>       
                </div>
                <div className="row">
                   <p>PUFI Copyright 2022 - Todos los derechos reservados</p>
                   <img src='https://i.imgur.com/ar0D3Q4.png' alt='logo BrandLive'></img>  
                </div>
            </div>
        </div>
        
    
    );
};

export default Footer