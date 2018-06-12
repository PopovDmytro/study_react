import {Component} from 'react';
import {articles} from './articles.json'

export class ArticlesApp extends Component {
	constructor(props){
		super(props);

		this.state = {
			articles: [],
			searchString: ''
		};

		this.handleArticleSearch = this.handleArticleSearch.bind(this);
		this.handleSearchString = this.handleSearchString.bind(this);

	}

	handleSearchString(e){
		this.setState({searchString: e.target.value.toLowerCase()});
	}

	handleArticleSearch(){
		let searchString = this.state.searchString;

		if(searchString){
			return articles.filter((el) => {
				let string = el.text.toLowerCase();
				return string.indexOf(searchString) !== -1;
			});
		}

		return articles;
	}



	render() {
		const articlesList = this.handleArticleSearch();

		return (
			<div className="article-app">
				<h1>Articles</h1>
				<div className="filter">
					<strong style={{marginRight: 10}}>filter</strong>
					<input type="text" onChange={this.handleSearchString} />
				</div>
				<ul>
					{articlesList.map((article) =>
							<li key={article.id}>{article.text}</li>
						)}
				</ul>

			</div>
		);
	}
}