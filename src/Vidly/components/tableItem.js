import React from 'react';
// import Like from '../common/like';
//
import _ from 'lodash';

const TableItem = ({movie, columns}) => {

    const renderCell = (movie, cell) => {
        if(cell.content) return cell.content(movie);
        return _.get(movie, cell.path);
    };

    return (
        <tr>
            {columns.map((cell, i)=> (<td key={i}>{renderCell(movie, cell)}</td>))}
        </tr>
    );
};

export default TableItem;