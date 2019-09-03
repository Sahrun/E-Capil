import React from 'react';

class Login extends React.Component {
    render() {
        return <div className="login">
            <div className="wrapper wrapper-login">
                <div className="container container-login animated fadeIn">
                    <h3 className="text-center">Sign In To Admin</h3>
                    <div className="login-form">
                        <div className="form-group form-floating-label">
                            <input id="username" name="username" type="text" className="form-control input-border-bottom" required />
                            <label htmlFor="username" className="placeholder">Username</label>
                        </div>
                        <div className="form-group form-floating-label">
                            <input id="password" name="password" type="password" className="form-control input-border-bottom" required />
                            <label htmlFor="password" className="placeholder">Password</label>
                            <div className="show-password">
                                <i className="flaticon-interface"></i>
                            </div>
                        </div>
                        <div className="row form-sub m-0">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="rememberme" />
                                <label className="custom-control-label" htmlFor="rememberme">Remember Me</label>
                            </div>

                            <a href="#" className="link float-right">Forget Password ?</a>
                        </div>
                        <div className="form-action mb-3">
                            <a href="#" className="btn btn-primary btn-rounded btn-login">Sign In</a>
                        </div>
                        <div className="login-account">
                            <span className="msg">Don't have an account yet ?</span>
                            <a href="#" id="show-signup" className="link">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    }
}

export default Login;