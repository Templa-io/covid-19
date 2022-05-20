import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#Products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Login">Login</a>
        </li>
      </ul>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Get In touch</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar
