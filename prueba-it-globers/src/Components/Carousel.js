import React from 'react'

const Carousel = () => {
    return (
        <div id='carouselExampleIndicators' class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://i.imgur.com/3qJCiKk.jpg" class="d-block w-100" alt="Paisaje"></img>
                </div>
                <div class="carousel-item">
                  <img src="https://i.imgur.com/NDxndA3.jpg" class="d-block w-100" alt="Mujeres en el mar"></img>
                </div>
                <div class="carousel-item">
                  <img src="https://i.imgur.com/pdsrdSp.jpg" class="d-block w-100" alt="Mujer descansando"></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <div>
               <h1>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL</h1>
               <button>SHOP</button>
            </div>
        </div>
    );
};

export default Carousel