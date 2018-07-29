import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// components
import Layout from './hoc/layout/layout';
import Home from './components/Home/home';
import NewsMain from './components/Articles/News/NewsMain/news';
import VideosMain from './components/Articles/Videos/VideosMain/videos';
import NewsArticle from './components/Articles/News/Posts/index';
import VideoArticle from './components/Articles/Videos/Video/index';

export default class Routes extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/news' exact component={NewsMain}/>
                    <Route path='/articles/:id' exact component={NewsArticle}/>
                    <Route path='/videos' exact component={VideosMain}/>
                    <Route path='/videos/:id' exact component={VideoArticle}/>
                </Switch>
            </Layout>
        );
    }
};
