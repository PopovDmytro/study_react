import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
// import Member from './components/ui/Member' //study implementation ---
// import { Member } from './components/ui/Member'
// import MemberList from './components/ui/MemberList'

window.React = React;

render(
	routes,
	document.getElementById('react-container'));
