import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
// Components
import CssTransition from './components/CssTransition'
import Tgoup from './components/Tgroup'
import TransitionComponent from './components/Transition'
//
import User from './components/user'

// Styles
import './styles/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="anim_index">
                    <NavLink to="/transition">Transition</NavLink>
                    <NavLink to="/csstransition">CssTransition</NavLink>
                    <NavLink to="/group">Transitions group</NavLink>
                    <NavLink to="/user">prop types user</NavLink>
                </div>
                <Route path="/transition" component={TransitionComponent} />
                <Route path="/csstransition" component={CssTransition} />
                <Route path="/group" component={Tgoup} />
                <Route path="/user" component={User} />
            </div>
        </BrowserRouter>
    );
};

export default App;
