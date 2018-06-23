import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
// Components
import CssTransition from './components/CssTransition'
import Tgoup from './components/Tgroup'
import TransitionComponent from './components/Transition'

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
                </div>
                <Route path="/transition" component={TransitionComponent} />
                <Route path="/csstransition" component={CssTransition} />
                <Route path="/group" component={Tgoup} />
            </div>
        </BrowserRouter>
    );
};

export default App;
