import React from 'react';
import hero from '../assets/img/hero2.svg';
import services from '../assets/img/services.svg';
import ecom from '../assets/vectors/60.svg';
import port from '../assets/vectors/74.svg';
import business from '../assets/vectors/12.svg';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalConfirmed: null,
            totalDeath: null,
            totalRecovered: null,
            totalOther: null,
            city: [],
        };
    }
   

    render() {     

        
        return (
           
            <div>
                      <div className="footer-bar">

<a href="https://www.linkedin.com/company/coritoindia/" className="linkedin" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a> 
<a href="https://www.facebook.com/Corito-104758868551778" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a> 
<a href="https://www.instagram.com/corito.in/" className="instagram" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a> 


                          </div>



<div className="Hero-Block">
          
          <div className="introduction"> 
      
                    <div className="intro-text"> 

                    
                      <div className="Hero-text"> 
                            <h1>We help businesses to turn Digital.</h1>
                            <h5>Best, Cheap & Bugdet friendly websites for all businesses.</h5>
                          

<                               ul>
                                <li><i class="fa fa-lock" aria-hidden="true"></i>Fast and Secure Development with SSL</li>
                                <li><i class="fa fa-tablet" aria-hidden="true"></i>Mobile and Tablet friendly UI</li>
                                <li><i class="fa fa-globe" aria-hidden="true"></i>SEO Friendly Web Design</li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i>24/7 fast and competent support</li>
                                
                      </ul> 

                    <br/>
                         
                            {/* <div className="contact-more"> 
                       <a href="https://www.mohfw.gov.in/"><button className="learn-more-link">Contact Us</button> </a> 
                        </div>   */}
    
                    </div>
                   
                 </div>
                        <div className="intro-img">
                            <div className = "Hero-Image">
                            <img src={hero} width = "100%"  alt="covid"/>
                            
                            </div>
                        </div>
          </div>
          <h2>Get Your Website Now.</h2>
          
                             <div className="contact-more"> 
                       <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUJPzlXK3O2J9BLKrVuJU1GzPvaNQdIkiqRfuDe9on2AlVXA/viewform?usp=sf_link"><button className="learn-more-link">Get a Quote.</button> </a> 
                        </div>   
          <div class="flex-container">
             
            <div class="flex-item-left">                    
                                <div class="single_reson">
                                    <div class="thum">
                                        <div class="thum_1">
                                            <img src={business} width="300" height="300" alt=""/>
                                        </div>
                                    </div>
                                    <div class="help_content serv1">
                                        <h4>Portfolio</h4>
                                        <p> We create diffrent kind of portfolios like Graphic designer portfolio, Photographer, Artist and Model portfolio.</p>
                                        {/* <a href="#" class="read_more">Read More</a> */}
                                    </div>
                                </div>
            </div>
            <div class="flex-item-middle"> 

                    <div class="single_reson">
                        <div class="thum">
                            <div class="thum_1">
                            <img src={port} width="300" height="300" alt=""/>
                            </div>
                        </div>
                        <div class="help_content serv2">
                            <h4>Business Website</h4>
                            <p>We help customers to Automate their work process by creating web portals like Admin-User Dashbords, Report Automations.</p>
                            {/* <a href="#" class="read_more">Read More</a> */}
                        </div>
                    </div>
            
            
            </div>
            <div class="flex-item-right">

            <div class="single_reson">
                <div class="thum">
                    <div class="thum_1">
                    <img src={ecom} width="300" height="300" alt=""/>
                    </div>
                </div>
                <div class="help_content serv3">
                    <h4>E-Commerce Website</h4>
                    <p>We help Customers set up their online store and sell online by creating 
                        beautiful, fully-featured ecommerce website.
                        </p>
                    {/* <a href="#" class="read_more">Read More</a> */}
                </div>
            </div>

            </div>
            
            </div>

        <div className="serviceBlock"> 


             <div className="intro-img">
             <h2>Services We Offer</h2>     
                    <div className = "Hero-Image">
                    <img src={services} width = "50%"  alt="covid"/>
                    
                    </div>
             </div>

            <div className="service-text"> 

                  <div className="Hero-text"> 
                        {/* <h1>We help businesses to turn Digital.</h1>
                        <h5>Best, Cheap & Bugdet friendly websites for all businesses.</h5>
                    
                            <ul>
                                <li><i class="fa fa-lock" aria-hidden="true"></i>Fast and Secure Development with SSL</li>
                                <li><i class="fa fa-tablet" aria-hidden="true"></i>Mobile and Tablet friendly UI</li>
                                <li><i class="fa fa-globe" aria-hidden="true"></i>SEO Friendly Web Design</li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i>24/7 fast and competent support</li>         
                            </ul> 

                            <br/> */}
                        <ul class="etta-see-more-less-list__list">
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">UI/UX</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Website Design</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Landing Pages</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Web Development</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">App Development</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                            
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Automation</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Devops</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Digital Marketing</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">SEO</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">SMM</a>
                            </li>
                            <li class="suggested-search__pill see-more-less-list__list-item "> 
                                <a href="" data-tracking-control-name="homepage-basic_suggested-search" data-tracking-will-navigate="" class="pill">Branding</a>
                            </li>
                        </ul>
                 </div>
            
             </div>

          
       </div>


       <div class="row row-content pb-0 contact">
                <div class="col-12 text-center align-items-center" id="whatsapp-block">
                    <h3><FontAwesomeIcon icon={faEnvelope} /> Write us at <span className="contactspan"> info@corito.in </span> for more Information</h3>
            
                    <h6>Call/Text us Here at ▼</h6>
                    <a href="https://api.whatsapp.com/send?phone=919717266959" class="btn btn-lg" role="button">
                    <FontAwesomeIcon icon={faWhatsapp} color="green" />               
                   </a> 
                    <a href="tel:09717266959" class="btn btn-lg" role="button">  <FontAwesomeIcon icon={faPhone} color="#E08E79" /> 
                    </a>
                            
                </div>
        </div>

  </div>
</div>
           
          

            
        );
    }
}

export { GetRequest }; 