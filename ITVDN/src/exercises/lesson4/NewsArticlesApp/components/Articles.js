import {Component} from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
//
import {Article} from './Article';
//
import articles from '../articles.json';
//
export class Articles extends Component {
	constructor(props) {
		super(props);

		this.handlePreviewClick = this.handlePreviewClick.bind(this);
	}

	handlePreviewClick (messageId) {
		this.props.history.push(`/article/${messageId}`);
	}

	render() {
		return (
			<div className="news">
				<h2>Articles list</h2>
				<ul>
					{
						articles.map(article => {
							return (
								<li key={article.id} onClick={this.handlePreviewClick.bind(null ,article.id)} >{article.subject}</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}