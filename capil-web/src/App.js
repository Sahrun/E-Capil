import React from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Main from './components/main/Main';
import Login from './components/guest/Login';
import Register from './components/guest/Register';
import Page_404 from './components/default/Page_404';

function App() {
  return (
    <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login/" component={Login} />
                <Route path="/register/" component={Register} />
                <Route path="/404" component={Page_404}/>
                <Route component={Main} />
            </Switch>
        </Router>
  );
}

export default App;
