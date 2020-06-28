import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Profile = ({loggedIn}) => {

    if(loggedIn) {
        return (
            <div className="d-flex justify-content-center">
                <div className="col-8">
                    <h2>Profile(secret page!!)</h2>
                    <div className="d-flex flex-column mt-3">
                        <span className="font-weight-bold">Your login</span>
                        <span>Admin</span>
                    </div>
                    <div className="d-flex flex-column mt-2">
                        <span className="font-weight-bold">Your password</span>
                        <span>12345</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Redirect to="/login/modal" />
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);