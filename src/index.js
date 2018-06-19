import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, /*HashRouter, MemoryRouter,*/ Route, NavLink, Switch} from 'react-router-dom';
//
import Posts from './components/posts';
import Home from './components/home';
import Profile from './components/profile';
import PostsItem from './components/post_item';
import Lifecycles from './components/lifecycles';
//


const App = () => {
    return (
        <BrowserRouter>
            <div className="">
                <header>
                    <NavLink to="/" exact activeClassName="selected" activeStyle={{color: 'lightblue'}}>Home</NavLink><br/>
                    <NavLink to="/posts" activeClassName="selected">Posts</NavLink><br/>
                    <NavLink to="/life" activeClassName="selected">LifeCycles</NavLink><br/>
                    <NavLink to={{
                        pathname: '/profile',
                        hash: '#francis',
                        search: '?profile=true'
                    }} activeClassName="selected">Profile</NavLink>
                </header>
                <hr/>
                <Switch>Using switch instead of exact attribute
                    <Route path="/posts/:id/:username" component={PostsItem} />
                    <Route path="/life" component={Lifecycles} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" exact component={Home} />
                    {/*<Route render={() => <h3>oop 404</h3>}/>*/}
                    <Route component={Posts}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
