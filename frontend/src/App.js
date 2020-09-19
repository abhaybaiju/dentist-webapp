import React from 'react';
import Pay from './components/pay';
import FrontPage from './components/FrontPage';
import Book from './components/Book';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

const App = () => {
  return(
    <Router>
          <Switch>
            <Route exact path="/" component={withRouter(FrontPage)} />
            <Route exact path="/Pay" component={withRouter(Pay)} />
            <Route exact path="/Book" component={withRouter(Book)} />
          </Switch>
      </Router>
  );
}

export default App;
