import React from 'react';
import { Link } from "react-router-dom";
import {Validation as validation} from '../../general/Validation';
import {authenticationService} from '../../service/AutenticationService';

const Error = 
{
    required : "Fild Is Required"
}
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            },            
            Error:{
                name:{
                    $invalid:false,
                    message:''
                },
                email:{
                    $invalid:false,
                    message:''
                },
                password:{
                    $invalid:false,
                    message:''
                },
                confirmPassword:{
                    $invalid:false,
                    message:''
                }
            },
            Submitted:false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.ViewPassword = this.ViewPassword.bind(this);
    }
    handleChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        let _user = Object.assign({}, this.state.user);
        _user[name] = value;
        this.setState({user:_user},function(){
            this.validationSubmit();
        });
      }
    
    handleSubmit(event) {
        var that = this;
        this.setState({Submitted:true},function(){
            if(this.validationSubmit()){
                authenticationService.register(this.state.user)
                .then(response =>{
                    alert("success!");
                })
                .catch(function (error) {
                     alert(error);
                });
            }
        });
        event.preventDefault();
    }
    validationSubmit(){
        var isValid = true;
        var user = this.state.user;
        var _error = this.state.Error;
        if(validation.isNull(user.name) && this.state.Submitted){
            isValid = false;
            _error.name.$invalid = true;
            _error.name.message = 'Field is Required';
        }else{
            _error.name.$invalid = false;
            _error.name.message = null;
        }

        if(validation.isNull(user.email)  && this.state.Submitted){
            isValid = false;
            _error.email.$invalid = true;
            _error.email.message = 'Field is Required';
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) && this.state.Submitted){
            isValid = false;
            _error.email.$invalid = true;
            _error.email.message = "Harap sertakan '@' dan '.com' di alamat email. '"+user.email+"' tidak ada '@' dan '.com'";
        }else{
            _error.email.$invalid = false;
            _error.email.message = null;
        }

        if(validation.isNull(user.password)  && this.state.Submitted){
            isValid = false;
            _error.password.$invalid = true;
            _error.password.message = 'Field is Required';
        }else{
            _error.password.$invalid = false;
            _error.password.message =null;
        }

        if(!validation.isNull(user.password) && validation.isNull(user.confirmPassword)  && this.state.Submitted){
            isValid = false;
            _error.confirmPassword.$invalid = true;
            _error.confirmPassword.message = 'Field is Required';
        }else if(user.password !== user.confirmPassword && this.state.Submitted){
            isValid = false;
            _error.confirmPassword.$invalid = true;
            _error.confirmPassword.message = 'Confirm password salah silahkan cek kembali';
        }else{
            _error.confirmPassword.$invalid = false;
            _error.confirmPassword.message = null;
        }

        this.setState({Error:_error});
        return isValid;
    }
    ViewPassword(event){
        const target = event.target;
        var _input = target.parentNode.parentNode.childNodes[0];
         const _type = _input.type === 'password' ? 'text': 'password';
         _input.type =_type;
         if(_type == 'text')
         {
             target.style.color = 'cornflowerblue'
         }else
         {
            target.style.color = ''
         }
    }
    render() {
        return <div className="login">
             <div className="wrapper wrapper-login">
                <div className="container container-signup">
                    <h3 className="text-center">Registrasi</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-form">
                            <div className="form-group">
                            <label htmlFor="name" className="placeholder"><b>Nama</b></label>
					        <input  id="name" name="name" type="text" className={this.state.Error.name.$invalid?'form-control is-invalid': 'form-control'} onChange={this.handleChange.bind(this)}/> 
                            <span className='text-danger'>{this.state.Error.name.message}</span>
                            </div>
                            <div className="form-group">
                               <label htmlFor="email" className="placeholder">Email/UserName</label>
                                <input  id="email" 
                                name="email" 
                                type="text" 
                                className={this.state.Error.email.$invalid?'form-control is-invalid': 'form-control'}
                                onChange={this.handleChange.bind(this)}/>
                                <span className='text-danger'>{this.state.Error.email.message}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="placeholder">Password</label>
                                <div className="position-relative">
                                    <input  id="password" 
                                    name="password" 
                                    type={this.state.passwordType}
                                    className={this.state.Error.password.$invalid?'form-control is-invalid': 'form-control'}
                                    onChange={this.handleChange.bind(this)}/>
                                    <div className="show-password">
                                        <i className="flaticon-interface" onClick={this.ViewPassword.bind(this)}></i>
                                    </div>
                                </div>
                                <span className='text-danger'>{this.state.Error.password.message}</span>
                            </div>
                            <div className="form-group">
                               <label htmlFor="confirmPassword" className="placeholder">Confirm Password</label>
                               <div className="position-relative">
                                    <input  id="confirmPassword" name="confirmPassword" 
                                    type={this.state.confirmPasswordType}
                                    className={this.state.Error.confirmPassword.$invalid?'form-control is-invalid': 'form-control'}
                                    onChange={this.handleChange.bind(this)}/>
                                    <div className="show-password">
                                        <i className="flaticon-interface" onClick={this.ViewPassword.bind(this)}></i>
                                    </div>
                                </div>
                                <span className='text-danger'>{this.state.Error.confirmPassword.message}</span>
                            </div>
                            <div className="form-action">
                            <Link className="btn btn-danger btn-rounded btn-login mr-3" to='/login'>Sign In</Link>
                                <a href="#" id="show-signin" ></a>
                                <button className="btn btn-primary btn-rounded btn-login">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>;

    }
}

export default Register;