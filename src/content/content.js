import React from 'react'
import {Route} from "react-router";
import MainPage from "../main-page";
import Login from "../login";
import News from "../news";
import Profile from "../profile";
import Modal from "../modal";



const Content = () => {
    return (
        <div className="container-sm mt-4">
            <Route path="/" component={MainPage} exact/>
            <Route path="/login" component={Login} />
            <Route path="/news" component={News} />
            <Route path="/profile" component={Profile} />
            <Route path="/login/modal" component={Modal} />
        </div>
    )
}

export default Content;