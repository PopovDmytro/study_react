import React from 'react';
//
import NewsItem from './news_list_item';
//
import classes from '../styles/news-list.css';

const NewsList = ({news, children}) => {

    const items = news.map((item, index, arr) => {
        return <NewsItem key={item.id} item={item} />;
    });

    return (
        <div>
            <h3>News list</h3>
            <ul className={classes.news_list}>
                {items}
            </ul>
        </div>
    );
};

export default NewsList;