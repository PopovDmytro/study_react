import React from 'react';

const TableMessage = (props) => {
    return (
        <div className="p-2">{props.moviesLength ? <h3>Showing {props.moviesLength} in the database.</h3> : <h3>No films in table</h3> }</div>
    );
};

export default TableMessage;
