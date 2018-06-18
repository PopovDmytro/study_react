import React from 'react';

const PostsItem = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Posts detail</h3>
            <p>{props.match.params.id}</p>
            <p>{props.match.params.username}</p>
        </div>
    );
};

export default PostsItem;
