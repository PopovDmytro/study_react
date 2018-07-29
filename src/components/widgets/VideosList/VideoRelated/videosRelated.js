import React from 'react';
//
import VideosListTemplate from '../videosListTemplate';
//
import styles from './../videosList.scss';

const VideosRelated = (props) => {
    return (
        <div className={styles.relatedWrapper}>
            <VideosListTemplate
                data={props.data}
                teams={props.teams}
            />
        </div>
    );
};

export default VideosRelated;
