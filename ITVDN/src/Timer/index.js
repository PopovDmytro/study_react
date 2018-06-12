import {Component} from 'react';

export class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			seconds: 0,
			isPaused: true
		};

		this.timerHandle = this.timerHandle.bind(this);

		this.restart = this.restart.bind(this);

	}

	tick () {
		this.setState({ seconds: this.state.seconds + 1});
	}

	timerHandle () {
		if(this.state.isPaused) {
			clearInterval(this.timer);
			this.timer = setInterval(() => this.tick(), 1000);
			this.setState({ isPaused: false });
		} else {
			clearInterval(this.timer);
			this.timer = undefined;
			this.setState({ isPaused: true });
		}
	}

	restart() {
		this.setState({seconds : 0});

		clearInterval(this.timer);
		this.timer = setInterval(() => this.tick(), 1000);

		this.setState({ isPaused: false });
	}

	componentWillUnmount() {
		this.pauseOn();
	}

	render () {
		const startPause = (this.state.isPaused) ? 'start' : 'pause';

		return (
			<div className="timer">
				<h3>so far {this.state.seconds} seconds went</h3>
					<button className="start" onClick={this.timerHandle}>{startPause}</button>
					<button className="restart" onClick={this.restart}>Restart</button>
			</div>
		);
	}
}