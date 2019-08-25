import React, {Component} from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from "./Posts/Posts";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active-link"
                  activeStyle={{border: '1px solid grey'}}
                >Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#twst',
                    search: '?quicksubmit=true'
                  }}
                  activeClassName="active-link"
                >New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/*<Route path="/posts/:id" component={FullPost} />*/}
		      {/*<Route path="/new-post" component={NewPost}/>*/}
		      <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts}/>
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;