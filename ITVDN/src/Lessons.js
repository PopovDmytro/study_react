import {Component} from 'react'
//lesson 1
// import {TaskOneTwo}  from './exercises/lesson1/TaskOneTwo'
// import {Calculator}  from './exercises/lesson1/Calculator'
//lesson 2
// import {ToDoApp} from './exercises/lesson2/ToDoApp'
//lesson 3
// import {ArticlesApp} from './exercises/lesson3/ArticlesApp'
// import {IncomeOutcomeApp} from './exercises/lesson3/IncomeOutcomeApp'
//lesson 4
// import {NewsArticlesApp} from './exercises/lesson4/NewsArticlesApp'
import {StoreApp} from './exercises/lesson4/StoreApp'


export class Lessons extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render () {

		return (
			<div className="app-wrapper">
				<StoreApp />
			</div>
		)
	}
}