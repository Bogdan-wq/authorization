import React from 'react'
import {connect} from "react-redux";
import { changeLoginInputValue,
         changePasswordInputValue,
         loggedInFalse,
         loggedInTrue,
         validPassword,
         validLogin,
         invalidPassword,
         invalidLogin } from "../actions";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const {
        loginValue,
        passwordValue,
        changeLoginInputValue,
        changePasswordInputValue,
        submitForm,
        loggedIn,
        invalidLogin,
        invalidPassword,
    } = props;


    if(loggedIn) {
        return <Redirect to="/" />
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="col-6" onSubmit={(e) => submitForm(e,loginValue,passwordValue)}>
                <div className="form-group">
                    <label htmlFor="login">Enter login:</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter login"
                           id="login"
                           value={loginValue}
                           onChange={(e) => changeLoginInputValue(e.target.value)}/>
                    {
                        invalidLogin &&
                        <div className="mt-1 text-danger small">Wrong login.Please try again.</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password"
                           className="form-control"
                           placeholder="Enter password"
                           id="pwd"
                           value={passwordValue}
                           onChange={(e) =>  changePasswordInputValue(e.target.value)}/>
                    {
                        invalidPassword &&
                        <div className="mt-1 text-danger small">Wrong password.Please try again.</div>
                    }
                </div>
                <div className="form-group">
                    <input type="submit"
                           value="Submit"
                           className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginValue: state.loginValue,
        passwordValue: state.passwordValue,
        loggedIn:state.loggedIn,
        invalidLogin:state.invalidLogin,
        invalidPassword:state.invalidPassword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoginInputValue:(value) => {
            dispatch(changeLoginInputValue(value))
        },
        changePasswordInputValue:(value) => {
            dispatch(changePasswordInputValue(value))
        },
        submitForm:(e,login,password) => {
            e.preventDefault();
            dispatch(changePasswordInputValue(''))
            dispatch(changeLoginInputValue(''))
            dispatch(validLogin())
            dispatch(validPassword())
            if(login === 'Admin' && password === '12345') {
                dispatch(loggedInTrue())
                dispatch(validLogin())
                dispatch(validPassword())
            }
            else {
                dispatch(loggedInFalse())
                if(login !== 'Admin') {
                    dispatch(invalidLogin())
                }
                if(password !== '12345') {
                    dispatch(invalidPassword())
                }
            }
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)