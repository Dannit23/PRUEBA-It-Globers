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
                        <img src='https://i.imgur.com/hq8L0KI.png' alt='Logo'></img>
                    </a>
                </li>
            </ul>
        </div>
   </nav>
)

}

export default Navbar