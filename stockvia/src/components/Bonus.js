import React,{useState, useEffect} from "react";
import stockimg from '../assets/stockimage.svg'
import axios from "axios";

import {Link } from 'react-router-dom';

export default function Bonus(){

    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        axios.get(`https://coritoindia.github.io/stockvia-data/sample1.json`)
        .then(res=>{
            setMainData(res.data)
            })
    }, [])

    console.log(mainData)

    return (
        <div className="container my-5">
          <h3>Bonus & Split 2021</h3>
          <p>Visit Stockvia Regularly To Get Updates On Bonus &  Share Split Declared by Companies During the Year.</p>

                <div className="hero-block">    
                    <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Announcement Date</th>
                                    <th>Bonus Ratio Type</th>
                                    <th>Ex-Date</th>
                                    <th>Record Date</th>
                                    
                                </tr>
                                </thead>

                                <tbody>
                                {mainData.map (i =>{
                                    return (
                                    
                                    <tr>
                                        <td>{i.companyName}</td>
                                        <td>{i.amount}</td>
                                        <td>{i.type}</td>
                                        <td>{i.exdate}</td>
                                        <td>{i.record}</td>
                                        
                                    </tr>
                                   
                                    
                                    )
                                    
                                })}
                                </tbody>
                    </table> 
                </div>
        </div>
 

    )
}