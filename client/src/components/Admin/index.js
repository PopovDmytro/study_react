import React from 'react';

const User = (props) => {

    const user = props.user.login;

    return (
        <div className="user_container">
            <div className="avatar">
                <img src="/images/avatar.png" alt="avatar"/>
            </div>
            <div className="nfo">
                <div className="">Name: <span>{user.name}</span></div>
                <div className="">Lastname: <span>{user.lastname}</span></div>
                <div className="">Email: <span>{user.email}</span></div>
            </div>
        </div>
    );
};

export default User;