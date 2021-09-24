
import {Link, NavLink } from 'react-router-dom';

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
      <NavLink className ="nav-link" to="/recos">recommendations.</NavLink>
      </li>
      
      <li class="nav-item">
     
        <Link className ="nav-link " to="/learn">learn. </Link>
        {/* <span class="badge bg-info">New</span> */}
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          more.
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/mutual-funds">Mutual Funds</Link>
          <a class="dropdown-item" href="#">ETF's</a>
          <a class="dropdown-item" href="#">Digi Gold/SGB</a>
          <a class="dropdown-item" href="#">PPF/NPS</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Crypto</a>
        </div>
      </li>
      
    </ul>
    <Link class="earn-btn" data-scroll-nav="1" to="/premium">Premium</Link>
    {/* <a href="#" data-scroll-nav="1" class="earn-btn">Earn with Us</a>
     */}
  </div>

  

</nav>

      </div>
    )
}