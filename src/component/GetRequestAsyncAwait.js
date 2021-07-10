import React  from 'react';

import fight from '../assets/img/fight.png';
import Chart from '../component/Charts'; 

import {STATE_NAMES} from './Constants';

import { CityDetails } from './CityDetails';





class GetRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            states: [],
            DistCode: [],
            
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.covid19india.org/v4/data.json');
        const data = await response.json();
        this.setState({ states: data    ,
            totalTested: data.TT.total.tested,
            DistCode : data.AP.districts,
        })

    }

    render() {
        const { states } = this.state;
        
       
        return (
          
            <div className="statedata">
          
                 <div className="statetable"> 
                            <div className= "stateImg">
                                  
                                    <CityDetails /> 
                                    <Chart  />       
                               
                              
                                <div className="Helpline"> 
                                <h2> Helpline</h2>  
                                    <div className="Help-content">
                                        <ul>
                                        <li><a href="tel:1123978046" ><i className="fa fa-mobile" aria-hidden="true"></i>:+91-11-23978046</a></li>
                                        <li><a href="tel:1075" ><i className="fa fa-phone" aria-hidden="true"></i>Toll Free: 1075</a></li>
                                        </ul>
                                        <ul>
                                        <li><a href="mailto:ncov2019@gmail.com" ><i className="fa fa-envelope" aria-hidden="true"></i>ncov2019@gov.in</a></li>
                                        <li><a href="tel:1921" ><i className="fa fa-volume-control-phone" aria-hidden="true"></i>Aarogya Setu 1921</a></li>
                                        </ul>
                                    </div>                                    
                                </div>
                                <div className="learn-more"> 
                                <h3>Learn More About COVID-19</h3>  
                               <a href="https://www.mohfw.gov.in/"><button className="learn-more-link">Visit mohfw.gov.in</button> </a> 
                                </div>  

                                <div className="pandemic"> 
                                    <h2>  <span >India Fights Corona</span> </h2>
                                    <img src={fight} width = "60%" alt="Icons"/>                                  
                                </div>  
                            </div>
                    <div className="statebody">
                   
                       <div className="stateheader">
                          {/* <h2> Stay Home and Stay Alert</h2>
                          <img src={homestay} width = "60%" alt="Icons"/>     */}
                      </div>
                            <table id="customers">
                            <thead>
                                    <tr>
                                        <th>States/UT</th>
                                        <th>Confirmed</th>
                                        <th>Active</th>
                                        <th>Recovered</th>
                                        <th>Deceased</th>
                                        <th>Tested</th>
                                    </tr>
                                    
                            </thead>
                                       {
                                            Object.keys(states,STATE_NAMES)
                                            .filter(
                                                (stateCode) =>
                                                stateCode !== 'TT' &&
                                                states[stateCode]['total'] 
                                                //  && states[stateCode][districts]
                                               )
                                                .map((stateCode,i) => {
                                                   
                                                    var confirmed = states[stateCode]['total']['confirmed'];
                                                    var recovered = states[stateCode]['total']['recovered'];
                                                    var migrated = states[stateCode]['total']['migrated'];
                                                    var deceased = states[stateCode]['total']['deceased'];
                                                    var tested = states[stateCode]['total']['tested'];
                                                   
                                                 
                                                    if(typeof confirmed === "undefined")
                                                    {
                                                        confirmed = 0;
                                                    } 
                                                    if(typeof recovered === "undefined")
                                                    {
                                                        recovered = 0;
                                                    } 
                                                    if(typeof deceased === "undefined")
                                                    {
                                                        deceased = 0;
                                                    } 
                                                    if(typeof migrated === "undefined")
                                                    {
                                                        migrated = 0;
                                                    } 
                                                    var active = confirmed - (recovered + migrated+ deceased);      
                                                
                                                    return(
                                                        <tbody >
                                                                <tr>
                                                                <td> { STATE_NAMES[stateCode] } </td>                                                                                                                                                                                                                 
                                                                <td> {confirmed}</td>
                                                                <td> {  active } </td>
                                                                <td> {recovered}</td>
                                                                <td> {deceased}</td>    
                                                                <td> {tested}</td>                                                            
                                                                </tr>  
                                                                </tbody>   
                                                        )    

                                                  }
                                                  
                                                 )   
                                                   
                                                                
                                        } 
                             </table>
                    </div>
                
                 </div>

               


            </div>
        );
        
    }
}

export { GetRequestAsyncAwait }; 