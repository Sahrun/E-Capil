import React from 'react';
import { BrowserRouter as Router, Route , Redirect, Switch   } from "react-router-dom";
import {httpHeader} from '../../config/HttpHeader';
import {httpService} from '../../service/HttpService';
import {config} from '../../config/Config';
import { Loading } from '../layout/Loading';

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Dashboard from '../dashboard/Dasboard';
import Warga from '../warga/Warga';

var Page_404 = function() {
     window.location = config.webUrl+config.Page_404;
}


class Main extends React.Component {
    constructor(props){
        super();
        httpHeader.HeaderRequest();
        this.state = { 
            ...props,
            navigation:[],
            mini_sidebar : false,
        };
     
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    componentDidMount() {
    }
    componentWillMount() {
        Loading.SpinnerRun(true);
        httpService.Get(config.routeApi.navigation,null).then(response=>{
            this.setState({
                  navigation:response
             }, function() {
                Loading.SpinnerRun(false);
             });
        });
    }
    toggleSidebar(event){
        this.state.mini_sidebar = !this.state.mini_sidebar;
        if(this.state.mini_sidebar){
            window.$('html').addClass('sidebar_minimize');
        }else{
            window.$('html').removeClass('sidebar_minimize');
        }
        window.$(window).resize();
    }
    render() {
        return <div className="wrapper">
            <div className="main-header" data-background-color="purple">
                {/* Logo Header  */}
                <div className="logo-header">
                    {/* <a href="/" className="logo">
                        <img src="/assets/img/logoazzara.svg" alt="navbar brand" className="navbar-brand" height="42" width="42" />
                    </a> */}
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="fa fa-ellipsis-v"></i></button>
                    <div className="navbar-minimize">
                        <button className={`btn btn-minimize btn-rounded ${this.state.mini_sidebar?'toggled':''}`} onClick={this.toggleSidebar.bind(this)}>
                            <i className={this.state.mini_sidebar? 'fa fa-ellipsis-v':'fa fa-bars'}></i>
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
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path="/dasboard" component={Dashboard} />
                        <Route path="/warga" component={Warga} />
                        <Route component={Page_404}/>
                    </Switch>
                </div>
            </div>
            {/* End Content */}

        </div>;

    }
}

export default Main;