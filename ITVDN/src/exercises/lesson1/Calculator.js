import {Component} from 'react'

import './scss/calculator.scss'

export class Calculator extends Component {
constructor(props) {
	super(props);

	this.state = {
		numbers: (() => {
			let numArray = [];
			for(let i = 0; i < 10; i++){
				numArray.push(i);
			}
			return numArray;
		})(),
		operators: ['+', '-', '*', '/', '='],
		calcLog: {
			num: '',
			num2: '',
			operator: null,
			answer: ''
		},
		answer: ''
	};

	this.initCalc = this.initCalc.bind(this);

}

	initCalc({num, operator}) {
		const calcLog = this.state.calcLog,
			calcNumb1 = calcLog.num,
			calcNumb2 = calcLog.num2,
			calcOPerator = calcLog.operator;

		let answer = this.state.answer;

		let mathOperators = {
			'+' : (x, y) => (x + y),
			'-' : (x, y) => (x - y),
			'*' : (x, y) => (x * y),
			'/' : (x, y) => (x / y),
		};

		if(num) {
			if(!calcLog.operator) {
				calcLog.num = calcLog.num + num;
				answer = answer + '' + num;

			} else {
				calcLog.num2 = calcLog.num2 + num;
				answer = answer + '' + num;
			}
		} else if(operator !== '=' && operator && calcLog.operator === null) {
			calcLog.operator = operator;
			answer = answer + operator;
		} else if(operator !== '=' && calcLog.operator !== null) {
			answer = answer.slice(0, answer.indexOf(calcLog.operator) ) + operator + answer.slice(answer.indexOf(calcLog.operator) + 1 );
			calcLog.operator = operator;
		}

		if(operator === '=' && calcLog.operator && calcLog.num && calcLog.num2 ) {
			answer = mathOperators[calcLog.operator](parseFloat(calcLog.num), parseFloat(calcLog.num2));

			calcLog.num = calcLog.num2 = calcLog.operator = null;
		}

		this.setState({
			calcLog: calcLog,
			answer: answer
		});
	}

	render() {

		const {numbers, operators, answer} = this.state;

		return (
			<div className="calculator">
				<h1>Calculator</h1>
				<div className="calc-wrapper">
					<div className="output">{answer ? answer : 'hello'}</div>
					<div className="numbers">
						{numbers.map((num, i) => (<button key={i} onClick={() => this.initCalc({num})} className="num">{num}</button>))}
					</div>
					<div className="operators">
						{operators.map((operator, i) => (
							<button key={i} onClick={() => this.initCalc({operator})} className="operator">{operator}</button>))}
					</div>
				</div>
			</div>
		)
	}
}