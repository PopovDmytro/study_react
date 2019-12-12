import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza');
});

class App extends Component {
  render() {
    return (
      <div>
        <div className="">
          <NavLink to="/">Users</NavLink>
          <NavLink to="/pizza">Pizza</NavLink>
        </div>

        <div className="">
          <Route path="/" exact component={Users} />
          <Route path="/pizza" exact component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;