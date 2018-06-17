import React from 'react';
import {css} from 'glamor';

const NewsItem = ({item}) => {

    let news_items = css({
       padding: '20px',
       boxSizing: 'border-box',
       borderBottom: '1px solid grey',
        ':hover': {
           color: 'red'
        },
        '@media(min-width: 768px)': {
           color: '#010101'
        }
    });

    let item_grey = css({
        background: 'lightgrey'
    });

    return (
        <li className={item_grey + " " + news_items} >
        {/*<li {...news_items} {...item_grey} >*/}
            <h4 >{item.title}</h4>
            <p>{item.feed}</p>
        </li>
    );
};

export default NewsItem;
