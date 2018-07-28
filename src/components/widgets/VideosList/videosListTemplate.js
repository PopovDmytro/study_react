import React from 'react';
import {Link} from 'react-router-dom';
//
import CardInfo from '../CardInfo/cardInfo';
//
import styles from './videosList.scss';

const VideosListTemplate = (props) => {
    return props.data.map( (item, i) => (
        <Link to={`/videos/${item.id}`} key={i} >
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left} style={{backgroundImage: `url(/images/videos/${item.image})`}}>
                    <div className=""></div>
                </div>
                <div className={styles.right}>
                    <CardInfo teams={props.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ));
};

export default VideosListTemplate;
