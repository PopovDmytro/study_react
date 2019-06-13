import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//
import './App.scss';
//
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavbar />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
