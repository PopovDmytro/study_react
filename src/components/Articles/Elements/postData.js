import React from 'react';
//
import styles from './../articles.scss';

const PostData = (props) => {
    return (
        <div className={styles.articlePostData}>
            <div className="">
                Date: <span>{props.data.date}</span>
            </div>
            <div className="">
                Author: <span>{props.data.author}</span>
            </div>
        </div>
    );
};

export default PostData;
