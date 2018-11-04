import React from 'react';

const MovieForm = (props) => {
    const {id} = props.match.params;

    return (
        <div>
            <h2>Current movie id: {id} </h2>
            <button className="btn btn-primary" onClick={() => { props.history.push('/movies') }} >Save</button>
        </div>
    );
};

export default MovieForm;
