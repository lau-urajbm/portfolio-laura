import React from 'react'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-dark navbar-expand-md navBarmine p-4 ">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
  <div class="container-fluid align-center">
      <ul class="navbar-nav justify-content-center ">
        <li class="nav-item px-4">
          <a class="nav-link active fs-4" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link fs-4" href="#">Features</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link fs-4" href="#">Pricing</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link  fs-4">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
