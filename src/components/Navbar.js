import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div >
                <nav class=" container navbar navbar-expand  ">
                    <div className="brand">
  <a class="navbar-brand ml-3" href="#">ueno.</a>
  </div>
 
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">SERVICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CLIENTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CAREERS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">ABOUT</a>
      </li>
      <li class="nav-item">
      <button class="button">CONTACT</button>
      </li>
    </ul>
  </div>
</nav>
            </div>
        );
    }
}

export default Navbar;