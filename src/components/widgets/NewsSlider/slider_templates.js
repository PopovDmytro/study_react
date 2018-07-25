import React from 'react';
import {Link} from 'react-router-dom';
//
import Slick from 'react-slick';
//
import styles from './style.scss';

const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    };

    switch (props.type) {
        case ('featured'):
            template = props.data.map( (item, i) => {
               return (
                    <div key={i}>
                        <div className={styles.featured_item}>
                            <div className={styles.featured_image}
                                 style={{backgroundImage: `url(../images/articles/${item.image})`}}>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={styles.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
               );
            });
            break;
        case ('other'):
            //other template ...
            break;
        default:
            template = null;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
};

export default SliderTemplates;
