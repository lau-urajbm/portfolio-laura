import React from 'react'
import { Link } from 'react-router-dom'

import '../css/portfolio.css'
import foto from '../Bernal_Laura.jpg'
import cv from '../cvLauraBernal.pdf'
//logos
import css from '.././svg tech/css3.8fba365c.svg'
import javascript from '.././svg tech/javascript.fd46ca41.svg'
import nodejs from '.././svg tech/nodejs.3dc364b8.svg'
import postgresql from '.././svg tech/postgresql.ae92b576.svg'
import react from '.././svg tech/react.ae626225.svg'
import redux from '.././svg tech/redux.a9567540.svg'
import sequelize from '.././svg tech/sequelize.49ad3c7d.svg'
import express from '../svg tech/expressjs-ar21.svg'
import bootstrap from'../svg tech/Bootstrap_logo.svg.png'
import wordpress from '../svg tech/wordpress.png'

//imagenes de proyectos
import landingGames from '../img proyectos/videogames foto.png'
import homegames from '../img proyectos/home.png'
import creationGames from '../img proyectos/creation games.png'
import landingDogs from '../img proyectos/landingdogs.png'
import homeDogs from '../img proyectos/app (2).png'
import creationDogs from '../img proyectos/creation dogs.png'
import dashboard from '../img proyectos/dashboard.png'
import homeshoes from '../img proyectos/homeshoes.png'
import pago from '../img proyectos/pago.png'
import selec from '../img proyectos/selec archivos.png'
import drag from '../img proyectos/drag and drop.png'
import saved from '../img proyectos/imagenes guardadas.png'
import unsplash from '../img proyectos/unsplash.png'
import addImages from '../img proyectos/new image.png'
import ContactForm from './ContactForm'
 
const Portfolio = () => {
  return (
    <div className='container mt-4'>
      <section className='container d-md-flex justify-content-around contenedor-all pt-4'>
      
      <div className=' p-4'>
      <h2>Laura Bernal</h2>
      <p>Soy una desarrolladora Full Stack con la capacidad de crear aplicaciones web escalables, adaptables y accesibles.
        Tengo muchas ganas de aprender y vivir nuevas experiencias :D.
      </p>
      </div>
      <div className='d-flex flex-column cont-foto'>
      <img src={foto} className=' image-me'></img>
      <a href={cv} download="cvLauraBernal" className='m-4 align-self-center'>
        <button className='boton-descarga rounded btn'>Descargar CV</button>
      </a>
      </div>
      </section>

      <section className='tech-sec' id='tech'>
        <h2 className='titles'>Tecnologías</h2>
        <div className='svg-container m-4 p-4 '>
          <div  className=' label-img' >
          <img src={css} className='tech m-4 p-4'></img>
          <h5>CSS3</h5>
          </div>
          <div  className=' label-img'>
          <img src={react} className='tech m-4 p-4'></img> 
          <h5>REACT</h5>
          </div>
          <div  className='label-img'>
          <img src={redux} className='tech m-4 p-4'></img> 
          <h5>REDUX</h5>
          </div> 
          <div  className='label-img'>
          <img src={postgresql} className='tech m-4 p-4'></img> 
          <h5>POSTGRESQL</h5>
          </div>
          <div  className='label-img'>
          <img src={javascript} className='tech m-4 p-4'></img> 
          <h5>JAVASCRIPT</h5>
          </div>
          <div  className='label-img'>
          <img src={nodejs} className='tech m-4 p-4'></img>
          <h5>NODEJS</h5>
          </div>
          <div  className='label-img' >
          <img src={sequelize} className='tech m-4 p-4'></img> 
          <h5>SEQUELIZE</h5>
          </div>
          <div  className='label-img' >
          <img src={express} className='tech m-4 p-4 express-img'></img> 
          <h5>EXPRESS</h5>
          </div>
          <div  className='label-img' >
          <img src={bootstrap} className='tech m-4 p-4'></img> 
          <h5>Bootstrap</h5>
          </div>
          <div  className='label-img' >
          <img src={wordpress} className='tech m-4 p-4'></img> 
          <h5>Wordpress</h5>
          </div>
        </div>
      </section>

      <section id='proyectos' className='pro-sec m-lg-4 p-lg-4 ' >
        <h2 className='titles'>Mis Proyectos</h2>
        <div className=' m-4'>
        <h4>Dogs App</h4>
        <div id="carouselExampleIndicators1" className="carousel slide " data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src={landingDogs} className="d-block w-100 " alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={homeDogs} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={creationDogs}className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className=' m-lg-2 p-lg-3 description'>

<p>App sobre perros desarrollada con  React, Redux y CSS puro para el front. Para el back 
   Node.js con
Express y para la base de datos PostgreSQL y Sequelize.<br></br>
link del repositorio en gitHub: <a href='https://github.com/lau-urajbm/Pi-Dogs
'>: https://github.com/lau-urajbm/Pi-Dogs
</a>
<br></br>
Link de la app:<br></br> <a href='https://dogsapp-opal.vercel.app
'>https://dogsapp-opal.vercel.app
</a>
</p>
</div>
</div>

<div className='m-4'>
<h4>Video Games App</h4>
        <div id="carouselExampleIndicators2" class="carousel slide " data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src={landingGames} class="d-block w-100 " alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={homegames} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={creationGames}class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='m-lg-2 p-lg-3 '>

<p>App de video juegos desarrollada con  React, Redux y CSS puro para el front. Para el back 
   Node.js con
Express y para la base de datos PostgreSQL y Sequelize.<br></br>
link del repositorio en gitHub: <a href='https://github.com/lau-urajbm/PIVideogames'>https://github.com/lau-urajbm/PIVideogames</a>
<br></br>
Link de la app:<br></br> <a href='https://videogames-app-five.vercel.app/'>https://videogames-app-five.vercel.app/</a>
</p>
</div>
</div>

<div className=' m-4'>
<h4>E-Commerce Henry Shoes</h4>
        <div id="carouselExampleIndicators3" class="carousel slide w-lg-50 h-50" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src={dashboard} class="d-block w-100 " alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={homeshoes} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={pago}class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='w-lg-50  m-lg-2 p-lg-3  '>

<p>E-Commerce de calzado con pasarela de Pago (Stripe), envío de emails transaccionales, carrito de
compras, creación y registro de usuarios; administración de usuarios,
productos, pedidos y ventas, gestión de claves. Algunas de las tecnologías utilizadas fueron: React, Redux, Bootstrap, JavaScript, Express,
sequelize, jsonwebtoken, entre otros. <br></br>
 
  Link de la app:<br></br> <a href=' https://henry-shoes.vercel.app/'> https://henry-shoes.vercel.app/
</a>
  </p>
  </div>
    </div>
    <div className=' m-4'>
    <h4>Uploader image app</h4>
        <div id="carouselExampleIndicators4" class="carousel slide w-lg-50 h-50" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src={selec} class="d-block w-100 " alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={drag} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={saved}class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='m-lg-2 p-lg-3 '>

<p>Para este pequeño proyecto utilice react, Bootstrap, Express, postgresql y cloudinary. Permite seleccionar
  imágenes del dispositivo y también arrastrarlas. Además quedan guardadas las imagenes agregadas por el usuario. <br></br>
 
  Link del respositorio en gitHub<br></br> <a href=' https://github.com/lau-urajbm/uploader-app'>https://github.com/lau-urajbm/uploader-app
</a>
  </p>
  </div>
    </div>

    <div className=' m-4'>
    <h4>My unsplash</h4>
        <div id="carouselExampleIndicators5" class="carousel slide w-lg-50 h-50" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src={unsplash} class="d-block w-100 " alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={addImages} class="d-block w-100" alt="..."></img>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='m-lg-2 p-lg-3 '>

<p>Galeria de fotos responsive realizada con react, Bootstrap, css, express, entre otros. 
  Se pueden buscar imágenes por su descripción y se pueden agregar nuevas imágenes<br></br>
 
  Link del respositorio en gitHub<br></br> <a href='https://github.com/lau-urajbm/MyUnsplash'>https://github.com/lau-urajbm/MyUnsplash
</a>
  </p>
  </div>
    </div>
      </section>

      <section className='cont-sec my-4 ' id='contact'>
      <h2 className='titles'>Contáctame</h2>

     
     
      <div className='mx-auto w-50'>
      <p className='titles mt-4 pt-4'>Me encantaría hablar contigo</p>
      <ContactForm></ContactForm>
      </div>
      <div>
        
       <div className='d-flex justify-content-around'>
          <li className='iconos'> <a href='https://github.com/lau-urajbm' target="_blank"><i class="bi bi-github iconos"></i></a></li>
          <li className='iconos' ><a href='https://www.linkedin.com/in/laurabernal-webdeveloper/' target="_blank"> <i class="bi bi-linkedin"></i></a></li>
          <li className='iconos'><a 
          href='https://wa.me/573005538425?text=Hola, he visto que eres web developer y me gustaría hablar contigo '
           target="_blank"> <i class="bi bi-whatsapp"></i></a></li>
       </div>
       </div> 
    
    </section>
    </div>
  )
}

export default Portfolio