import React,{useState, useEffect} from "react";
import stockimg from '../assets/stockimage.svg'
import axios from "axios";

import {Link } from 'react-router-dom';

export default function Recos(){

    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        axios.get(`https://coritoindia.github.io/stockvia-data/sample2.json`)
        .then(res=>{
            setMainData(res.data)
            })
    }, [])

    console.log(mainData)

    return (
        <div className="container my-5">
          <h3>Stock Recommendations</h3>
          <p>Get highly curated stock recommendations
by experts & top firms!</p>

                <div className="hero-block">    
                    <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Current Price</th>
                                    <th>Target</th>
                                    <th>Recommeded By</th>
                                  
                                    
                                </tr>
                                </thead>

                                <tbody>
                                {mainData.map (i =>{
                                    return (
                                    
                                    <tr>
                                        <td>{i.companyName}</td>
                                        <td>{i.cmp}</td>
                                        <td>{i.target}</td>
                                        <td>{i.firm}</td>
                                      
                                        
                                    </tr>
                                   
                                    
                                    )
                                    
                                })}
                                </tbody>
                    </table> 
                </div>
        </div>
 

    )
}