import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Router, Route, Switch, IndexRoute, Redirect } from "react-router-dom"
import createHashHistory from "history/createHashHistory"

import Layout from "./pages/Layout"
import Settings from "./pages/Settings"
import Archives from "./pages/Archives"
import  { Featured } from "./pages/Featured"


const history = createHashHistory();

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={history}>
		<div>
			<Layout />
			<Switch>
				<Route path="/archives" name="archives" component={Archives} />
				<Route path="/featured" component={Featured} props={{title: 1}} />
				<Route path="/settings" component={Settings} />
			</Switch>
		</div>
	</Router>,
	app);