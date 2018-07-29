import React from 'react';
//
import styles from './../articles.scss';

const TeamInfo = (props) => {
    return (
        <div className={styles.articleTeamHeader}>
            <div className={styles.left}
                 style={{backgroundImage:`url(/images/teams/${props.team.logo})`}}
            >

            </div>
            <div className={styles.right}>
                <div className="">
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div className="">
                    <strong> W{props.team.stats[0].wins} - L{props.team.stats[0].defeats} </strong>
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;
