import React from 'react';
//import Pay from './components/pay';
import FrontPage from './components/FrontPage';
import Book from './components/Book';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

const App = () => {
  return(
    <Router>
          <Switch>
            
            <Route exact path="/Book"><Book/></Route>
            <Route exact path="/Success"><Success/></Route>
            <Route path="/"><FrontPage/></Route>
          </Switch>
      </Router>
  );
}

export default App;
