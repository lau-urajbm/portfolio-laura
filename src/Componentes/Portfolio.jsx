import React from 'react'
import '../css/portfolio.css'
import foto from '../Bernal_Laura.jpg'

const Portfolio = () => {
  return (
    <div className='container mt-4'>
      <section className='d-flex justify-content-evenly contenedor-all'>
      
      <div className='p-4'>
      <h1>Laura Bernal</h1>
      <p>Soy una desarrolladora Full Stack con la capacidad de crear aplicaciones web escalables, adaptables y accesibles.
        Tengo muchas ganas de aprender y vivir nuevas experiencias :D.
      </p>
      </div>
      <img src={foto} className=' image-me'></img>
      </section>
    </div>
  )
}

export default Portfolio