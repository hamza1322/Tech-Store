//{
// "email":"Admin.clan@gmail.com",
// "password":"DevClan22"
// }


import React, { Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import PropTypes from "prop-types";


class LoginModal extends Component{
    state = {
        email: "",
        password: "",
        msg : null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error : PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
            if(error.id === 'LOGIN_FAIL'){
                this.getState({msg: error.msg});
            }else{
                this.setState({msg:null});
            }
        }
        

    }
    onChange = e =>{
      this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit = e =>{
      e.preventDefault();
      const {email, password} = this.state;
      this.props.login({email, password});
    }
    


    render(){
      
      return(
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-groupe">
                   <label htmlFor="name">Email:</label>  
                   <input type="email" name="email" id="email" onChange = {this.onChange}/>
                </div> 
                <div className="form-groupe">
                   <label htmlFor="name">Password:</label>  
                   <input type="password" name="password" id="password" onChange = {this.onChange}/>
                </div>
                
                <input type="submit" onClick={this.onSubmit}/>  
            </div>
        </form>
      )
    }

}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated,
  error : state.error
});


export default connect(
  mapStateToProps,
  {login, clearErrors}
)(LoginModal);


