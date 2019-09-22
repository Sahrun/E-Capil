import React from 'react';
import {httpService} from '../../service/HttpService';
import {config} from '../../config/Config';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="page-inner">
            <div className="page-header">
                <h4 className="page-title">Dashboard</h4>
                <div className="btn-group btn-group-page-header ml-auto">
                    <button type="button" className="btn btn-light btn-round btn-page-header-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-ellipsis-h"></i>
                    </button>
                    <div className="dropdown-menu">
                        <div className="arrow"></div>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body ">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ml-3 ml-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Visitors</p>
                                        <h4 className="card-title">1,294</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-info bubble-shadow-small">
                                        <i className="far fa-newspaper"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ml-3 ml-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Subscribers</p>
                                        <h4 className="card-title">1303</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-success bubble-shadow-small">
                                        <i className="far fa-chart-bar"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ml-3 ml-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Sales</p>
                                        <h4 className="card-title">$ 1,345</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                                        <i className="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ml-3 ml-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Order</p>
                                        <h4 className="card-title">576</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-head-row">
                                <div className="card-title">User Statistics</div>
                                <div className="card-tools">
                                    <a href="#" className="btn btn-info btn-border btn-round btn-sm mr-2">
                                        <span className="btn-label">
                                            <i className="fa fa-pencil"></i>
                                        </span>Export</a>
                                    <a href="#" className="btn btn-info btn-border btn-round btn-sm">
                                        <span className="btn-label">
                                            <i className="fa fa-print"></i>
                                        </span>Print </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-container" style={{ minHeight: '375px' }}>
                                <canvas id="statisticsChart"></canvas>
                            </div>
                            <div id="myChartLegend"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-secondary">
                        <div className="card-header">
                            <div className="card-title">Daily Sales</div>
                            <div className="card-category">March 25 - April 02</div>
                        </div>
                        <div className="card-body pb-0">
                            <div className="mb-4 mt-2">
                                <h1>$4,578.58</h1>
                            </div>
                            <div className="pull-in">
                                <canvas id="dailySalesChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card card-info bg-info-gradient">
                        <div className="card-body">
                            <h4 className="mb-1 fw-bold">Tasks Progress</h4>
                            <div id="task-complete" className="chart-circle mt-4 mb-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Dashboard;