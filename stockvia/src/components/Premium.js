import React,{useState, useEffect} from "react";
import playstore from '../assets/google-play.svg'
import appstore from '../assets/app-store.svg'
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
          <p>Join Our Telegram/Whatsapp Groups for Personalised <br/> Stock Recommendations , Mutual Funds , ETFs and other Investment Tips.</p>

                <div className="hero-block">    
                 
                  <div className="app-section">
                  <img src={playstore} alt="play store" />
                  <img src={appstore} alt="play store" />
                  </div>
                  <h3>coming soon..</h3>
                </div>
        </div>
 

    )
}