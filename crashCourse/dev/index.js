import React from 'react';
import { render } from 'react-dom'

window.React = React;

//for testing ---   -------   ------- delete after develop
window.show = console.log;
window.test = 101;
//-------   -------   -------

//components
import { App }  from './src/App'
//html
import '../index.html';
//scss
import './src/scss/basic.scss'
//

render(
	<App />,
	document.getElementById('app')
);
