import logo from './logoBlack.png';

import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';


import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import Recos from './components/Recos'; 
import News from './components/News';
import Learn from './components/Learn';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
     <Header/>
        <Switch>
          <Route exact path ='/' component = {Main} />
          <Route  path ='/recos' component = {Recos} />
          <Route  path ='/news' component = {News} />
          <Route  path ='/learn' component = {Learn} />
          
        </Switch>
      <Footer />

    </BrowserRouter>

    </div>
  );
}

export default App;
