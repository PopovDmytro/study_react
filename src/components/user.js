import React from 'react';
//
import UserHoc from '../hoc/userHoc';

const User = (props) => {
    console.log(props);
    return (
        <div>
            User 1
        </div>
    );
};

const User2 = (props) => {
    console.log(props);
    return (
        <div>
            User 2
        </div>
    );
};

export default UserHoc(User, User2, 'Hello');
