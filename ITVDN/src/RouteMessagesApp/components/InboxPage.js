import {Component} from 'react';
import PropTypes from 'prop-types'
//
import messages from '../messages.json'
import {MessagePreview} from './MessagePreview';

export class InboxPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.handlePreviewClick = this.handlePreviewClick.bind(this);
	}

	handlePreviewClick (messageId) {
		this.context.router.history.push(`/inbox/message/${messageId}`);
	}

	render() {

		// const { messageId: selectedMessageId } = this.props.match.params;

		return (
			<div className="inbox-page">
				{console.log()}
				<h2 className="title"> Inbox Page </h2>
				<div className="messages">
					{messages.map(message =>
							<MessagePreview
								key={message.id}
								selected={~this.props.location.pathname.indexOf(message.id)}
								onClick={this.handlePreviewClick.bind(null, message.id)}
								title={message.title}
								senderName={message.senderName} />
						)
					}
				</div>

				<div className="message-container">
					{this.props.children}
				</div>
			</div>
		);
	}

}

InboxPage.contextTypes = {
	router: PropTypes.object.isRequired
};