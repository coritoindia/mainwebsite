import React,{useState, useEffect} from "react";
import stockimg from '../assets/stockimage.svg'
import axios from "axios";

import {Link } from 'react-router-dom';

export default function IPO(){

    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        axios.get(`https://coritoindia.github.io/stockvia-data/ipo.json`)
        .then(res=>{
            setMainData(res.data)
            })
    }, [])

    console.log(mainData)

    return (
        <div className="container my-5">
          <h3>IPO's List 2021 (Mainboard & SME IPO)</h3>
          <p>Visit Stockvia Regularly To Get Latest Updates on Upcoming IPO's in India.</p>

                <div className="hero-block">    
                    <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Exchange</th>
                                    <th>Open</th>
                                    <th>Close</th>
                                    <th>Lot Size</th>
                                    <th>Issue Price</th>
                                    <th>Issue Size</th>
                                    
                                </tr>
                                </thead>

                                <tbody>
                                {mainData.map (i =>{
                                    return (
                                    
                                    <tr>
                                        <td>{i.companyName}</td>
                                        <td>{i.exchange}</td>
                                        <td>{i.open}</td>
                                        <td>{i.close}</td>
                                        <td>{i.lotsize}</td>
                                        <td>{i.price}</td>
                                        <td>{i.issuesize}</td>                                        
                                    </tr>
                                   
                                    
                                    )
                                    
                                }) }
                                </tbody>
                    </table> 
                </div>
        </div>
 

    )
}