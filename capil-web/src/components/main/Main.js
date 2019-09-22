import React from 'react';
import { BrowserRouter as Router, Route , Redirect, Switch   } from "react-router-dom";
import {httpHeader} from '../../config/HttpHeader';
import {httpService} from '../../service/HttpService';
import {config} from '../../config/Config';

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Dashboard from '../dashboard/Dasboard';

var Page_404 = function() {
     window.location ="http://localhost:3000/404";
}
class Main extends React.Component {
    constructor(props){
        super();
        httpHeader.HeaderRequest();
        this.state = { ...props,navigation:[]};
        httpService.Get(config.routeApi.navigation,null).then(response=>{
              this.setState({
                  navigation:response.data
             });
        });
    }
    componentDidMount() {
    }
    render() {
        return <div className="wrapper">
            <div className="main-header" data-background-color="purple">
                {/* Logo Header  */}
                <div className="logo-header">
                    <a href="/" className="logo">
                        <img src="/assets/img/logoazzara.svg" alt="navbar brand" className="navbar-brand" height="42" width="42" />
                    </a>
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="fa fa-ellipsis-v"></i></button>
                    <div className="navbar-minimize">
                        <button className="btn btn-minimize btn-rounded">
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </div>

                {/* End Logo Header */}

                {/* End Navbar */}
                <Navbar/>
                {/* Navbar Header */}

            </div>

            {/* Sidebar */}
            {
                this.state.navigation.length &&
                <Sidebar navigation={this.state.navigation}/>
            }
            {/* End Sidebar */}

            {/* Content */}
            <div className="main-panel">
                <div className="content">
                    <Router>
                        <Switch>
                            <Route exact path="/dasboard" component={Dashboard} />
                            <Route exact path="/" component={Dashboard} />
                            <Route component={Page_404}/>
                        </Switch>
                    </Router>
                </div>
            </div>
            {/* End Content */}

        </div>;

    }
}

export default Main;