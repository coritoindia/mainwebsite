import React  ,{ Component } from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
class Header extends Component{


    render(){
        return(
                  //<> or <React.Fragment>
               
        <>
         
        <div className="topnav" id="myTopnav">
                 
                   <NavLink className="active" to= "/">
               <img src={logo} width = "30%"  alt="corito"/>
                   </NavLink>
                        <NavLink  to= "/about">
                        <span className="fa fa-briefcase i"></span> Our work
                        </NavLink>
                        <NavLink className="nav-link" to= "/services">
                        <span className="fa fa-bookmark i"></span> Services 
                        </NavLink>
                        <NavLink className="nav-link" to= "/pricing">
                        <span className="fa fa-credit-card-alt i"></span> Pricing
                        </NavLink>
                  
         </div> 
        
        </>
     

        );
    }
}
export default Header;
