import React from 'react';
import ReactDOM from 'react-dom';
//
import * as serviceWorker from './serviceWorker';
//
import logger from './services/logService';
//
import './index.scss';
//
// import App from "./App";
// import App from './router-app/App';
// import App from './http-app/App';
import RoutesVidly from './Vidly/routes'

// console.log(process.env);

logger.init();

ReactDOM.render(<RoutesVidly/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
