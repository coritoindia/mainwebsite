import logo from './logoBlack.png';

import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';


import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import Recos from './components/Recos'; 
import Mutualfunds from './components/Mfs';
import Learn from './components/Learn';
import Dividend from './components/Dividend';
import Premium from './components/Premium';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
     <Header/>
        <Switch>
          <Route exact path ='/' component = {Main} />
          <Route  path ='/recos' component = {Recos} />
          <Route  path ='/mutual-funds' component = {Mutualfunds} />
          <Route  path ='/learn' component = {Learn} />
          <Route  path ='/premium' component = {Premium} />
          
          <Route  path ='/dividend' component = {Dividend} />
          
        </Switch>
      <Footer />

    </BrowserRouter>

    </div>
  );
}

export default App;
