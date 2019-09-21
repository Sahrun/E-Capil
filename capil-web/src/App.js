import React from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import { history } from './service/History';
import { authenticationService } from './service/AutenticationService';
import { PrivateRoute } from './service/RoutePrivate';

import Main from './components/main/Main';
import Login from './components/guest/Login';
import Register from './components/guest/Register';
import Page_404 from './components/default/Page_404';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null
    };
  }

  
  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }
  logout() {
    authenticationService.logout();
    history.push('/login');
  }
  render(){
    const { currentUser } = this.state;
        return (
          <Router history={history}>
                  <Switch>
                      <PrivateRoute exact path="/" component={Main} />
                      <Route path="/login/" component={Login} />
                      <Route path="/register/" component={Register} />
                      <Route path="/404" component={Page_404}/>
                      <PrivateRoute component={Main} />
                  </Switch>
              </Router>
        );
}

}

export default App;
