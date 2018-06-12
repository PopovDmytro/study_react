import {Component} from 'react';

import articles from '../articles.json';

export class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			article: {}
		};

		this.findMessage = this.findMessage.bind(this);
	}

	findMessage() {
		// this.setState({article: articles.find(article => article.id === this.props.match.params.articleId) });
		return articles.find(article => article.id === this.props.match.params.articleId);
	}

	render() {
		const {subject, body} = this.findMessage();

		return (
			<div className="article">
				<hr />
				<h2>{subject}</h2>
				<hr />
				<p>{body}</p>
				<hr />
			</div>
		);
	}
}