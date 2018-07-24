import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// components
import Home from './components/Home/home'
import Layout from './hoc/layout/layout';


export default class Routes extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </Layout>
    )
  }
};
