import React from 'react';
import { Link, NavLink } from "react-router-dom";

class Sidebar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {navigation:[]};
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
                            <li className="nav-item active" key={i}>
                            <Link to={nav.NavigationUrl}>
                                    <i className="fas fa-home"></i>
                                    <p>{nav.NavigationTitle}</p>
                                    <span className="badge badge-count">5</span>
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