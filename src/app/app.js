import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../nav-bar";
import Content from "../content";

const App = () => {
    return (
        <Fragment>
            <NavBar />
            <Content />
        </Fragment>
    )
}

export default App;