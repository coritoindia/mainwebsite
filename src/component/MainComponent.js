import React from 'react';

import { GetRequest }  from './GetRequest';
import Facts  from  './Facts';
import Header from './Header';
import Footer from './Footer';
import Symptoms from './Symptoms';
import Prevention from './Prevention';


import {Switch,Route, Redirect,BrowserRouter,NavLink} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                
                <Header />
                <Switch> 

                <Route exact path="/" component={GetRequest} />
                <Route path="/about" component={GetRequest} />
                <Route path="/services" component={GetRequest}  />
                <Route path="/pricing" component = {GetRequest} />

                   <Redirect to = "/" />
                </Switch>    
                <Footer />
            </div>
        );
    }
}

export default Main ; 