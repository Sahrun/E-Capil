import React , { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import { history } from './config/History';
import { authenticationService } from './service/AutenticationService';
import { PrivateRoute } from './config/RoutePrivate';
import { Loading } from './components/layout/Loading';

const Main = lazy(() => import( './components/main/Main'));
const Login = lazy(() => import( './components/guest/Login'));
const Register = lazy(() => import( './components/guest/Register'));
const Page_404 = lazy(() => import( './components/default/Page_404'));

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
        return (<div>
          <Router history={history}>
            <Suspense fallback={<Loading.LoadingPage/>}>
                  <Switch>
                      <PrivateRoute exact path="/" component={Main} />
                      <Route path="/login/" component={Login} />
                      <Route path="/register/" component={Register} />
                      <Route path="/404" component={Page_404}/>
                      <PrivateRoute component={Main} />
                  </Switch>
              </Suspense>
          </Router><Loading.Spinner/></div>);
}

}

export default App;
