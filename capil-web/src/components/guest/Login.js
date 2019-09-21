import React from 'react';
import {authenticationService} from '../../service/AutenticationService';

class Login extends React.Component {
    constructor(props) {
        super(props);

        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }

        this.state = {
            user:{
                email:"",
                password:"",
                confirmPassword:""
            }
      };
      this.handleChange = this.handleChange.bind(this);
      this.Login = this.Login.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        let state = Object.assign({}, this.state);
        state.user[name] = value;
        this.setState(state);
      }
    
    Login(event) {
        var that = this;
        authenticationService.login(this.state.user).then( result => {
            this.props.history.push('/');
        });
    }
    render() {
        return <div className="login">
            <div className="wrapper wrapper-login">
                <div className="container container-login animated fadeIn">
                    <h3 className="text-center">Sign In To Admin</h3>
                    <div className="login-form">
                        <div className="form-group form-floating-label">
                            <input id="email" name="email" type="text" className="form-control input-border-bottom" required 
                            onChange={this.handleChange.bind(this)}/>
                            <label htmlFor="email" className="placeholder">Username</label>
                        </div>
                        <div className="form-group form-floating-label">
                            <input id="password" name="password" type="password" className="form-control input-border-bottom" required
                            onChange={this.handleChange.bind(this)} />
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
                        <button onClick={this.Login.bind(this)}
                        className="btn btn-primary btn-rounded btn-login">Sign In</button>
                        </div>
                        <div className="login-account">
                            <span className="msg">Don't have an account yet ?</span>
                            <button onClick={this.Login.bind(this)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    }
}

export default Login;