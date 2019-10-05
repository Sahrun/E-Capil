import React from 'react';
import {authenticationService} from '../../service/AutenticationService';
import { Loading } from '../layout/Loading';

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
                confirmPassword:"",
                rememberme:false,
            },
            submited:false,
            error:{
                errorEmail:'',
                emailvalid:true,
                errorPassword:'',
                passwordVaid:true
            },
            passwordType:'password'
            
      };
      this.handleChange = this.handleChange.bind(this);
      this.Login = this.Login.bind(this);
      this.ViewPassword = this.ViewPassword.bind(this);
    }
    componentWillMount(){
        this.setState({submited:false});
    }
    componentDidMount(){
        this.setState({submited:false});
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        let state = Object.assign({}, this.state);
        state.user[name] = value;
        this.setState(state);
        this.validate();
      }
    
    Login(event) {
        this.setState({submited: true}, function() {
           if(this.validate()){
                var that = this;
                Loading.SpinnerRun(true);
                authenticationService.login(this.state.user).then( result => {
                    if(result){
                        Loading.SpinnerRun(false);
                        this.props.history.push('/');
                    }else{
                        Loading.SpinnerRun(false);
                    }
                });
            }
        });
    }
    ViewPassword(){
        var type = this.state.passwordType == 'password'? 'text': 'password';
        this.setState({passwordType:type});
    }
    validate(){
        var isValid = true;
        var errorMasage = this.state.error;
        if((this.state.user.email == '' || this.state.user.email == undefined || this.state.user.email == null) && this.state.submited){
            errorMasage.errorEmail ='Email is required';
            errorMasage.emailvalid = false;
            isValid = false;
        }else{
            errorMasage.errorEmail =null;
            errorMasage.emailvalid = true;
        }
        if((this.state.user.password == '' || this.state.user.password == undefined || this.state.user.password == null)  && this.state.submited){
            errorMasage.errorPassword ='Password is required';
            errorMasage.passwordVaid = false;
            isValid= false;
        }else{
            errorMasage.errorPassword =null;
            errorMasage.passwordVaid = true;
        }
        this.setState({error:errorMasage});
        return isValid;
    }
    render() {
        return <div className="login">
            <div className="wrapper wrapper-login">
                <div className="container container-login animated fadeIn">
                    <h3 className="text-center">Masuk</h3>
                    <div className="login-form">
                        <div className="form-group">
                            <label htmlFor="email" className="placeholder"><b>Username</b></label>
                            <input id="email" name="email" type="text" className={!this.state.error.emailvalid? 'form-control is-invalid':'form-control'} required onChange={this.handleChange.bind(this)}/>
                            <span className='text-danger'>{this.state.error.errorEmail}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="placeholder"><b>Password</b></label>
                            <a href="#" className="link float-right">Lupa password ?</a>
                            <div className="position-relative">
                                <input id="password" name="password" type={this.state.passwordType} className={!this.state.error.passwordVaid?'form-control is-invalid':'form-control'} required onChange={this.handleChange.bind(this)} />
                                <div className="show-password">
                                    <i className="flaticon-interface" onClick={this.ViewPassword.bind(this)}></i>
                                </div>
                                <span className='text-danger'>{this.state.error.errorPassword}</span>
                            </div>
                        </div>
                        <div className="form-group form-action-d-flex mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="rememberme" name="rememberme" checked={this.state.rememberme} onChange={this.handleChange.bind(this)}/>
                                <label className="custom-control-label m-0" htmlFor="rememberme">Ingat Saya</label>
                            </div>
                            <button onClick={this.Login.bind(this)}
                            className="btn btn-primary btn-rounded btn-login">Masuk</button>
                        </div>
                        <div className="login-account">
                            <span className="msg">Belum ada account? ?</span>
                            <a href="#" id="show-signup" className="link">Buat Account</a>
                        </div>
                    </div>
		        </div>
            </div>
         </div>;

    }
}

export default Login;