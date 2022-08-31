import React from 'react'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-md navBarmine p-4 fixed-top">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
  <div className="container-fluid align-center">
      <ul className="navbar-nav justify-content-center ">
        <li className="nav-item px-4">
          <a className="nav-link active fs-4 linknav" aria-current="page" href="#">Sobre mí</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link active fs-4" href="#tech">Tecnologías</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link active fs-4" href="#proyectos">Proyectos</a>
        </li>
        <li className="nav-item px-4">
          <a href='#contact' className="nav-link active fs-4">Contáctame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
