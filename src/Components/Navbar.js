import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
return (
    <nav className='navbar fixed-top bg-light' id={styles.navbar}>
        <div className={styles.containerNav}>
            <a href='#Home' className='Navbar-brand'  id={styles.contLogo}>
               <img className={styles.logo} src='https://i.imgur.com/xreXa6i.png' alt='Logo'></img>
            </a>
        </div>
        <div class="nav-menu-item">
            <ul className={styles.navMenu}>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timePuff">
                        <img className={styles.logosNav}src='https://i.imgur.com/hq8L0KI.png' alt='LogoPuff'></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timeRain">
                        <img className={styles.logosNav} src='https://i.imgur.com/vLM6mbD.png' alt='LogoSombrilla'></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timeCart">
                        <img className={styles.logosNav} src='https://i.imgur.com/BcrNi0M.png' alt='LogoBolso'></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timeNap">
                        <img className={styles.logosNav} src='https://i.imgur.com/D5cBtA4.png' alt='LogoAlmohada'></img>
                    </a>
                </li>
            </ul>
        </div>
        <div className='nav-menu-dropdown'>
            <select id={styles.myAccount}>
              <option value="my-account">MI CUENTA</option>
            </select>
            <a className={styles.myShopping} href="#">MI COMPRA</a>
        </div>
   </nav>
);

};

export default Navbar