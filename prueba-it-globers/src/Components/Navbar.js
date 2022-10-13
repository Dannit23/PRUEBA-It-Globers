import React from 'react'

const Navbar = () => {
return (
    <nav className='navbar fixed-top bg-light'>
        <div class="container-nav">
            <a href='#Home' className='Navbar-brand'>
               <img src='https://i.imgur.com/xreXa6i.png' alt='Logo'></img>
            </a>
        </div>
        <div class="nav-menu-item">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timePuff">
                        <img src='https://i.imgur.com/hq8L0KI.png' alt='LogoPuff'></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timeRain">
                        <img src='https://i.imgur.com/vLM6mbD.png' alt='LogoSombrilla'></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timeCart">
                        <img src='https://i.imgur.com/BcrNi0M.png' alt='LogoBolso'></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#timeNap">
                        <img src='https://i.imgur.com/D5cBtA4.png' alt='LogoAlmohada'></img>
                    </a>
                </li>
            </ul>
        </div>
        <div className='nav-menu-dropdown'>
            <select id="my-account">
              <option value="my-account">MI CUENTA</option>
            </select>
            <a class="my-shopping" href="#">MI COMPRA</a>
        </div>
   </nav>
);

};

export default Navbar