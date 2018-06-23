import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    return (
        <div>
            template
        </div>
    );
};

UserTemplate.propTypes = {
    // name: PropTypes.oneOf(['Francis', 'Steve']),
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(["Francis", "AnotherVariant"])
    ]),
    lastname: PropTypes.string,
    age: PropTypes.number,
    // hobbies: PropTypes.array,
    hobbies: PropTypes.arrayOf(PropTypes.string),
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    // mother: PropTypes.string.isRequired
    mother: function (props, propsName, componentName) {
        if(props[propsName] !== "Jane") {
          return new Error(`the name ${props[propsName]} is incorrect, should be ... !`);
        }
    }
};

export default UserTemplate;
