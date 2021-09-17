import React,{useState, useEffect} from "react";
import stockimg from '../assets/stockimage.svg'
import axios from "axios";

import {Link } from 'react-router-dom';

export default function Learn(){

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
          <h3>Learn & Earn</h3>
          <p>All You need to know About Stock Market to Get Started.</p>

                <div className="hero-block">    
                <div className="learn-block">
                <h5>What is Stock/Share Market</h5>
                <p>A stock market, equity market, or share market is the collection of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately. </p>
                
                <br />
                <h5>What is Nifty & Sensex </h5>
                <p>A stock market, equity market, or share market is the collection of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately. </p>
                

                </div>
               
                </div>
        </div>
 

    )
}