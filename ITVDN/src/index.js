import React from 'react';
import {render} from 'react-dom';

//video examples
// import {ContactList} from './ContactList'; //1
// import {Timer} from './Timer'; //2
// import {NotesList} from './NotesList'; //2
// import {RouteMessagesApp} from './RouteMessagesApp'; //4
import {TasksManager} from './TasksManager'; //5
//lessons ---
// import {Lessons} from './Lessons';
// ---

window.React = React;

// import './scss/style.scss';

const app = document.getElementById('app');

render(
	<TasksManager />,
	app
);

//for reload browser after change html
// import '../dist/index.html';