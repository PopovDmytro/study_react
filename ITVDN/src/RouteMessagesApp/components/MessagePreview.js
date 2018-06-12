import {Component} from 'react';
import classNames from 'classnames';

export class MessagePreview extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	const {title, senderName, onClick, selected} = this.props;

	const classes = classNames('message-preview', {selected});
		return (
			<div className={classes} onClick={onClick}>
				<div className="title">
					{title}
				</div>
				<div className="from">
					{`from: ${senderName}`}
				</div>
			</div>
		);
	}

}