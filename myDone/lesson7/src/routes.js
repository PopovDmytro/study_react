import React from 'react'
import { BrowserRouter , Router, Route, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'
import  { Left, Right, Whoops404  } from './components'
import MainMenu from './components/ui/MainMenu'

const hashHistory = createHashHistory();

const routes = (
		<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Left >
						<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/members" component={MemberList} />
						<Route path="*" component={Whoops404} />
						</Switch>
					</Left>
				</Switch>
		</BrowserRouter>
);

export default routes;