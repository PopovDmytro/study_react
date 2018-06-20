import React from 'react';

const Conditional = () => {

    let value = true;

    const showIt = () => {
        return (returnValue() ?
            <div>Hello it is true</div>
            :
            <div>Hello it is false</div>
        )
    };

    const returnValue = () => {
        return value;
    };

    return (
        <div>
            {showIt()}
        </div>
    );
};

export default Conditional;
