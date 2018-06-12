import React from "react"
import { Link, NavLink } from "react-router-dom"

import { createBrowserHistory } from 'history/createHashHistory'

// import Header from "../components/Header"
// import Footer from "../components/Footer"

export default class Layout extends React.Component {

	render() {

		const { location } = this.props;
		const styles = {marginRight: "50px"};

		return (
			<div>
				<h1>Welcome PAge title</h1>
				<NavLink to="/archives" activeClassName="active" style={styles}><button className="btn btn-warning">Archives</button></NavLink>
				<NavLink to="/settings"><button className="btn btn-primary">Settings</button></NavLink>
				<NavLink to="/featured"><button className="btn btn-danger">Featured</button></NavLink>

				<button >thisOnClick</button>
			</div>
		);
	}
}
