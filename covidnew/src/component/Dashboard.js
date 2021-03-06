import React from 'react';
import covidred from '../assets/img/covid.svg';
import covidbll from '../assets/img/coviddeath.svg';
import { CityStateData }  from './CityStateData';
import covidgreen from '../assets/img/covidactive.svg';
import covidgg from '../assets/img/covidrecover.svg';
import 'font-awesome/css/font-awesome.min.css';
import {GlobalData} from './Global';
import protection from '../assets/img/protection.png';
import SideMenu from './SideMenu';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalConfirmed: null,
            totalDeath: null,
            totalRecovered: null,
            totalOther: null,
            vaccine1:null,
            vaccine2:null,
            city: [],
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
     
        fetch('https://data.covid19india.org/v4/min/data.min.json')
            .then(response => response.json())
            .then(data => this.setState({ 
                totalOther: data.TT.total.other,
                totalTested: data.TT.total.tested,
                totalDeath:  data.TT.total.deceased,
                totalConfirmed:  data.TT.total.confirmed,
                totalRecovered: data.TT.total.recovered,
                vaccine1: data.TT.total.vaccinated1,
                vaccine2:data.TT.total.vaccinated2,
                newConfirmed: data.TT.delta.confirmed,
                newDeath:  data.TT.delta.deceased,
                newRecovered: data.TT.delta.recovered,
                newOther: data.TT.delta.other,
                 }));
    }

    render() {
        const { totalConfirmed,totalRecovered,totalTested ,totalDeath ,totalOther, vaccine1, vaccine2, newConfirmed,newDeath,newRecovered} = this.state;

      

         function thousands_separators(num)
        {
          var num_parts = num.toString().split(".");
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return num_parts.join(".");
        }
       
        var confirmInt = Number(totalConfirmed);
        var confirmComma =   (thousands_separators(confirmInt));
        var active =  totalConfirmed - (totalRecovered + totalDeath + totalOther)
        var activeInt  = parseInt(active)
        var activeComma =   (thousands_separators(activeInt));
        var recoverInt  =  Number(totalRecovered);
        var recoverComma =   (thousands_separators(recoverInt));
        var deathInt  =  Number(totalDeath);
        var deathComma =   (thousands_separators(deathInt));
        const totalVaccine = vaccine1 + vaccine2;
  
        return (
           
            <div className="Hero-Block">
                  <div className="introduction"> 
              
                            <div className="intro-text"> 
                                    <h1>Covid-19 Live tracker</h1>
                                    <p>A Location-wise Corona Cases Tracker. <br/>
                                        Please Allow Location Access To Know Your City Details.
                                    </p>
                                    <span><i class="fa fa-check" aria-hidden="true"></i> {totalVaccine} Vaccine doses administered <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                   <br/>
                                   <div className="book-slot">
                                 <a href="https://www.cowin.gov.in/">Book Slot</a>  
                                   </div>
                            </div>
                                <div className="intro-img">
                                    <div className = "Hero-Image">
                                    <img src={protection} width = "50%"  alt="covid"/>
                                    
                                    </div>
                                </div>
                  </div>
          
                    <SideMenu/>
                    <GlobalData  tested={totalTested} daily = {newConfirmed}/>
                  
                 <div className="Main-Content">
                            <div className="bottom-animation">
                                            <ul className="borda" >
                                                <li id="anime5">
                                                    <img src={covidred} width = "20%"  alt="covid"/>
                                                    <span>Total Cases</span>
                                                    <p className="Developer-box"> {confirmComma}</p>
                                                    <p className="new-box"> <i className="fa fa-arrow-circle-up" aria-hidden="true"></i> {newConfirmed} (New Cases)</p>
                                                </li>
                                                <li id="anime6" >
                                                    <img src={covidgreen} width = "20%" alt="covid"/>
                                                    <span>Active</span> 
                                                    <p className="Developer-box">
                                                    {activeComma}
                                                       
                                                        </p>
                                                        <p className="new-box"> Tested: {totalTested}</p>  
                                                
                                                </li>
                                                <li id="anime7" >
                                                    <img src={covidgg} width = "20%" alt="covid"/>
                                                    <span>Recovered</span>
                                                    <p className="Developer-box">{recoverComma} </p>
                                                    <p className="new-box"> <i className="fa fa-arrow-circle-up" aria-hidden="true"></i> {newRecovered}(Recoveries)</p>
                                                </li>
                                                <li id="anime8" >
                                                    <img src={covidbll} width = "20%"  alt="covid"/>
                                                    <span>Deaths</span>
                                                    <p className="Developer-box">{deathComma}</p> 
                                                    <p className="new-box"> <i className="fa fa-arrow-circle-up" aria-hidden="true"></i> {newDeath} (New Deaths)</p>
                                                </li>
                                                
                                            </ul>
                             </div>
                </div>
                          
                <CityStateData />            
               
          </div>
            
        );
    }
}

export { Dashboard }; 