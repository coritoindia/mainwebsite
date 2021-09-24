import logo from './logoBlack.png';

import { HashRouter, Route, Switch , Link } from 'react-router-dom';


import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import Recos from './components/Recos'; 
import Mutualfunds from './components/Mfs';
import Learn from './components/Learn';
import Dividend from './components/Dividend';
import Premium from './components/Premium';
import Bonus from './components/Bonus';
import IPO from './components/IPO';

function App() {
  return (
    <div className="App">
    <HashRouter>
    
     <Header/>
        <Switch>
          <Route exact path ='/' component = {Main} />
          <Route  path ='/recos' component = {Recos} />
          <Route  path ='/mutual-funds' component = {Mutualfunds} />
          <Route  path ='/learn' component = {Learn} />
          <Route  path ='/premium' component = {Premium} />
          <Route  path ='/bonus-split' component = {Bonus} />
          <Route  path ='/dividend' component = {Dividend} />
          <Route  path ='/ipo' component = {IPO} />
        </Switch>
      <Footer />

    </HashRouter>

    </div>
  );
}

export default App;
