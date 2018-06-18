import React from 'react';
import {NavLink} from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            <h3>Posts</h3>
            <div>
                <NavLink to="/posts/1/user1">post 1</NavLink><br />
                <NavLink to="/posts/2/user2">post 2</NavLink><br />
                <NavLink to="/posts/3/user3">post 3</NavLink>
            </div>
        </div>
    );
};

export default Posts;
