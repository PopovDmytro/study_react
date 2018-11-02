import React from 'react';
//
import TableItem from './tableItem';

const TableRows = (props) => {
    const {movies, columns} = props;
    return (
        <tbody>
        {movies.map((movie, i) => <TableItem columns={columns}
                                             key={i}
                                             movie={movie}
                                             handleLike={props.handleLike}
                                             onDeleteMovie={props.onDeleteMovie}/>)}
        </tbody>
    );
};

export default TableRows;
