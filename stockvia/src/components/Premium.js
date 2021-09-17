import React,{useState, useEffect} from "react";
import stockimg from '../assets/stockimage.svg'
import axios from "axios";

import {Link } from 'react-router-dom';

export default function Premium(){

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
          <h3>Premium Subscription</h3>
          <p>Visit Stockvia Regularly To Get Latest Stock Market Updates.</p>

                <div className="hero-block">    
                  <h1>Coming Soon..</h1>
                </div>
        </div>
 

    )
}