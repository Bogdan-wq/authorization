import React from 'react'
import './nav-bar.scss'
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import {loggedInFalse} from "../actions";

const NavBar = ({logOut,history}) => {

    const logOutAndGoRegister = () => {
        logOut()
        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark d-flex justify-content-between">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Main</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/news" className="nav-link">News</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={logOutAndGoRegister}>Log out</button>
        </nav>
    )
}


const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut:() => {
            dispatch(loggedInFalse())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NavBar));