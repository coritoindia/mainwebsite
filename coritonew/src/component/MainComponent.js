import React from 'react';

import { LandingPage }  from './LandingPage';

import Header from './Header';
import Footer from './Footer';



import {Switch,Route, Redirect,BrowserRouter,NavLink} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                
                <Header />
                <Switch> 

                <Route exact path="/" component={LandingPage} />
                <Route path="/about" component={LandingPage} />
                <Route path="/services" component={LandingPage}  />
                <Route path="/pricing" component = {LandingPage} />

                   <Redirect to = "/" />
                </Switch>    
                <Footer />
            </div>
        );
    }
}

export default Main ; 