import React from 'react';
import {NavLink/*, Redirect*/} from 'react-router-dom';
//
import Card from '../hoc/card';
import Auth from '../hoc/auth';


const Profile = (props) => {

    // const redir = () => {
        // props.history.push('/'); //instead of Redirect to="/"
    // };

    return (
        <Auth>
            <Card>
                <h3>Profile</h3>
                <NavLink activeClassName="active" to={{
                    pathname: `${props.match.url}/posts`
                }}>To profile/posts</NavLink>
            </Card>
        </Auth>
    );
};

export default Profile;
