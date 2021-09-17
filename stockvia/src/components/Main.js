import React,{useState, useEffect} from "react";
import stockimg from '../assets/stockimage.svg'
import axios from "axios";

import {Link } from 'react-router-dom';

export default function Main(){

    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        axios.get(`https://coritoindia.github.io/stockvia/sample1.json`)
        .then(res=>{
            setMainData(res.data)
            })
    }, [])

    console.log(mainData)

    return (
        <div className="container my-5">
          <h3>All in One Stop for </h3>
          <p> Stock Market | Mutual Funds | ETF's | Crypto | Digi Gold </p>

          
            <div className="hero-block">

            <div class="d-flex main-hero p-3">  
            <div class="p-2 hero-image">
              <div className="img-block">
              <img src={stockimg}  width='70%' class="img-fluid" />
              </div>
          
            <h4 className="pt-1">We help your Money grow.</h4>
          <p> Get Daily Stock Market Update | Stock Recommendations</p>

            </div>

            <div class="p-2 hero-content ">

            <div class="row hero-row align-items-center justify-content-center  ">
                <div class="col-sm-5 shadow hero-col align-middle stock-col" >  <Link to="/recos">Stock Recos</Link></div>
                <div class="col-sm-5 shadow hero-col dividend-col"> <Link to="/dividend">Dividend</Link> </div>
                <div class="col-sm-5 shadow hero-col  buy-col"> Bonus/Split</div>
                <div class="col-sm-5 shadow hero-col ipo-col"> IPO's</div>
            </div>
         

              
            </div>
          
  </div>

           
{/* 
                <table class="table">
                            <thead>
                              <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                
                              </tr>
                            </thead>
                            {mainData.map (i =>{
                                return (
                                
                                <tbody>
                                  <tr>
                                    <td>{i.firstName}</td>
                                    <td>{i.lastName}</td>
                                    
                                  </tr>
                                  </tbody>
                                  
                                )
                                
                            })}
                </table> */}


            </div>
    
    

        </div>
 

    )
}