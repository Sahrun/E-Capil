import React from 'react';
import { Link } from "react-router-dom";


class Sidebar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {navigation:[],path:''};
        this.navActive = this.navActive.bind(this);
    }
    componentDidMount() {
        this.setState({
            navigation:this.props.navigation
       });
       var scrollbar = window.$('.sidebar .scrollbar-inner');
        if (scrollbar.length > 0) {
            scrollbar.scrollbar();
        }
    }
    componentWillMount(){
        this.setState({path : window.location.pathname});
    };
    navActive(pathname, event){
        this.setState({path:pathname});
    }
    render(){
        return (<div className="sidebar">
            <div className="sidebar-background"></div>
            <div className="sidebar-wrapper scrollbar-inner">
                <div className="sidebar-content">
                    <div className="user">
                        <div className="avatar-sm float-left mr-2">
                            <img src="/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                <span>
                                    Hizrian
                                        <span className="user-level">Administrator</span>
                                    <span className="caret"></span>
                                </span>
                            </a>
                            <div className="clearfix"></div>
                            <div className="collapse in" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <a href="#profile">
                                            <span className="link-collapse">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#edit">
                                            <span className="link-collapse">Edit Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#settings">
                                            <span className="link-collapse">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav">
                        {
                         this.props.navigation.map((nav,i) =>
                           <li className={`nav-item ${this.state.path == nav.NavigationUrl?'active':''}`} key={i} onClick={this.navActive.bind(this,nav.NavigationUrl)}>
                            <Link to={nav.NavigationUrl}>
                                    <i className={nav.icon}></i>
                                    <p>{nav.NavigationTitle}</p>
                            </Link>
                            </li>
                         )
                        }
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default Sidebar;