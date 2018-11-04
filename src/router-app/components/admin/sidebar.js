import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return (
        <ul>
            <li><Link to="/admin/users" >Admin users</Link></li>
            <li><Link to="/admin/posts" >Admin posts</Link></li>
        </ul>
    );
};

export default SideBar;
