import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import NewsList from './components/news_list';
//
import './styles/styles.css';
//imported data
import JSON from './db.json';

class App extends Component {

    state = {
        news: JSON
    };

    test = {a: 1};

    render() {

        return (
            <div>
                <Header></Header>
                <NewsList news={this.state.news} donkey={"Hi pi"}>
                </NewsList>
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.querySelector('#root'));
