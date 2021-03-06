import React from 'react';
import FrontPage from './components/FrontPage';
import Book from './components/Book';
import Success from './components/Success';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Refunds from './components/Refunds';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return(
    <Router>
          <Switch>
            <Route exact path="/Terms"><Terms/></Route>
            <Route exact path="/Privacy"><Privacy/></Route>
            <Route exact path="/Refunds"><Refunds/></Route>
            <Route exact path="/About"><AboutUs/></Route>
            <Route exact path="/Services"><Service/></Route>
            <Route exact path="/Contact"><Contact/></Route>
            <Route exact path="/Book"><Book/></Route>
            <Route exact path="/Success"><Success/></Route>
            <Route path="/"><FrontPage/></Route>
          </Switch>
      </Router>
  );
}

export default App;
