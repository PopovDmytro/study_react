import React from 'react';
//
const NewsItem = ({item}) => {
    return (
        <li>
            <h4 >{item.title}</h4>
            <p>{item.feed}</p>
        </li>
    );
};

export default NewsItem;
