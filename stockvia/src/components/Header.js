
import {Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Header(){

    return (
      <div class="header-area">
         
<nav class="navbar navbar-expand-sm p-3">
 
  <Link className ="navbar-brand" to="/"><img src={logo} width ="50%" /></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span><FontAwesomeIcon icon={faBars} /></span>
                    </button>

 <div class="collapse navbar-collapse justify-content-center align-items-end m-auto mb-0" id="Navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link className ="nav-link" to="/recos">Recommondations</Link>
      </li>
      
      <li class="nav-item">
        <Link className ="nav-link " to="/news">News</Link>

      </li>
      <li class="nav-item">
     
        <Link className ="nav-link " to="/learn">Learn <span class="badge bg-info">New</span></Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Corporate Actions
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>

    <a href="#" data-scroll-nav="1" class="earn-btn">Earn with Us</a>
    
  </div>

  

</nav>

      </div>
    )
}