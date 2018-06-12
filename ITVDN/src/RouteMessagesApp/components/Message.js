import {Component} from 'react';

import messages from '../messages.json';

export class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: () => {
				return {message: messages.find(message => message.id === this.props.match.params.messageId)};
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		const {messageId : prevId} = this.props.match.params.messageId;
		const {messageId : nextId} = nextProps.match.params.messageId;

		if(prevId !== nextId) {
			this.setState({
				message: messages.find(message => message.id === nextId)
			});
		}

	}

	render() {
		const {message} = this.state.message();

		return (
			<div className="message">
				<p>From {message.senderName} ({message.senderEmail})</p>
				<p>To: you</p>
				<p>Subject: {message.subject}</p>
				<hr/>
				<p>{message.body}</p>
			</div>
		);
	}

}