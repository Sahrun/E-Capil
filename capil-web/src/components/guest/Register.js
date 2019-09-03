import React from 'react';
import axios from 'axios';

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
            ErorUser:{
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            }
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        let state = Object.assign({}, this.state);
        state.user[name] = value;
        state.ErorUser[name] = "";
        this.setState(state);
      }
    
    handleSubmit(event) {
        var that = this;
        event.preventDefault();
        // let inValid = false;

        // let state = Object.assign({}, this.state);

        // if(this.state.user.name == null || this.state.user.name == ""){
        //     state.ErorUser.name = Error.required;
        //     inValid = true;
        // }
        // if(this.state.user.email == null || this.state.user.email == ""){
        //     state.ErorUser.email = Error.required;
        //     inValid = true;
        // }
        // if(this.state.user.password == null || this.state.user.password == ""){
        //     state.ErorUser.password = Error.required;
        //     inValid = true;
        // }
        // if(this.state.user.confirmPassword == null || this.state.user.confirmPassword == ""){
        //     state.ErorUser.confirmPassword = Error.required;
        //     inValid = true;
        // }
        // this.setState(state);
        
        // if(!inValid){

            axios.post('http://127.0.0.1:8000/api/register/', this.state.user)
              .then(function (response) {
                that.redirect("/");
              })
              .catch(function (error) {
                alert(error);
              });
        // }
        event.preventDefault();
    }
    redirect(route){
        this.props.history.push(route);
    }
    render() {
        return <div className="login">
             <div className="wrapper wrapper-login">
                <div className="container container-signup">
                    <h3 className="text-center">Registrasi</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-form">
                            <div className="form-group form-floating-label">
                                <input  id="name"
                                name="name" 
                                type="text" 
                                className="form-control input-border-bottom" 
                                required
                                onChange={this.handleChange.bind(this)}
                                />
                                <label htmlFor="name" className="placeholder">Nama</label>
                            </div>
                            <div className="form-group form-floating-label">
                                <input  id="email" 
                                name="email" 
                                type="email" 
                                className="form-control input-border-bottom"
                                required
                                onChange={this.handleChange.bind(this)}/>
                                 <label htmlFor="email" className="placeholder">Email/UserName</label>
                            </div>
                            <label className="text-danger">{this.state.ErorUser.email}</label>
                            <div className="form-group form-floating-label">
                                <input  id="password" 
                                name="password" 
                                type="password" 
                                className="form-control input-border-bottom"
                                onChange={this.handleChange.bind(this)}
                                required/>
                                <label htmlFor="passwordsignin" className="placeholder">Password</label>
                                <div className="show-password">
                                    <i className="flaticon-interface"></i>
                                </div>
                            </div>
                            <div className="form-group form-floating-label">
                                <input  id="confirmPassword" name="confirmPassword" 
                                type="password"
                                 className="form-control input-border-bottom"
                                 required  onChange={this.handleChange.bind(this)}/>
                                <label htmlFor="confirmpconfirmPasswordassword" className="placeholder">Confirm Password</label>
                                <div className="show-password">
                                    <i className="flaticon-interface"></i>
                                </div>
                            </div>
                            {/* <div className="row form-sub m-0">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="agree" id="agree"/>
                                    <label className="custom-control-label" htmlFor="agree">I Agree the terms and conditions.</label>
                                </div>
                            </div> */}
                            <div className="form-action">
                                <a href="#" id="show-signin" className="btn btn-danger btn-rounded btn-login mr-3">Cancel</a>
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