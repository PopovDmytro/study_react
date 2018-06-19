import React from 'react';
import {NavLink/*, Redirect*/} from 'react-router-dom';

const Profile = (props) => {

    const redir = () => {
        props.history.push('/'); //instead of Redirect to="/"
    };

    return (
        <div>
            <h3>Profile</h3>
            <NavLink activeClassName="active" to={{
                pathname: `${props.match.url}/posts`
            }}>To profile/posts</NavLink>

            {redir()}
        </div>
    );
};

export default Profile;
