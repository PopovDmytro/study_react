import React from 'react';

const Card = (props) => {

    const style = {
        background: 'lightgray'
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    );
};

export default Card;
