import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//
import {Provider} from 'react-redux';
import store from './store';
//
import './App.scss';
//
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <AppNavbar />
                    <div className="container">
                        <Switch>
                            <Route path="/client/add" exact component={AddClient} />
                            <Route path="/client/:id" exact component={ClientDetails} />
                            <Route path="/client/edit/:id" exact component={EditClient} />
                            <Route path="/" exact component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
