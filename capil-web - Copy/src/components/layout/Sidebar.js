import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Sidebar = function () {
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
                    <li className="nav-item active">
                    <Link to="/dasboard">
                            <i className="fas fa-home"></i>
                            <p>Dashboard</p>
                            <span className="badge badge-count">5</span>
                    </Link>
                    </li>
                    <li className="nav-section">
                        <span className="sidebar-mini-icon">
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 className="text-section">Components</h4>
                    </li>
                    <li className="nav-item">
                        <a data-toggle="collapse" href="#base">
                            <i className="fas fa-layer-group"></i>
                            <p>Base</p>
                            <span className="caret"></span>
                        </a>
                        <div className="collapse" id="base">
                            <ul className="nav nav-collapse">
                                <li>
                                    <a href="components/avatars.html">
                                        <span className="sub-item">Avatars</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/buttons.html">
                                        <span className="sub-item">Buttons</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/gridsystem.html">
                                        <span className="sub-item">Grid System</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/panels.html">
                                        <span className="sub-item">Panels</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/notifications.html">
                                        <span className="sub-item">Notifications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/sweetalert.html">
                                        <span className="sub-item">Sweet Alert</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/font-awesome-icons.html">
                                        <span className="sub-item">Font Awesome Icons</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/flaticons.html">
                                        <span className="sub-item">Flaticons</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="components/typography.html">
                                        <span className="sub-item">Typography</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Sidebar;