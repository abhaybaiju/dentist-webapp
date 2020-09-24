import React from 'react';
//import Pay from './components/pay';
import FrontPage from './components/FrontPage';
import Book from './components/Book';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return(
    <Router>
          <Switch>

            <Route exact path="/Book"><Book/></Route>
            <Route exact path="/Success"><Success date="12 OCT 2020" time="11:00 AM"/></Route>
            <Route path="/"><FrontPage/></Route>
          </Switch>
      </Router>
  );
}

export default App;
