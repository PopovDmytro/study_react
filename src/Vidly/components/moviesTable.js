import React, {Component} from 'react';
import TableHeader from './tableHeader';
import TableRows from './tableRows';

class MoviesTable extends Component {

    render() {
        const {movieObjFields, currentMovies, handleLike, onDeleteMovie, onSort, sortColumn, columns} = this.props;
        return (
            <div>
                {!!currentMovies.length &&
                <table className="table">
                    <TableHeader movieFields={movieObjFields} onSort={onSort} sortColumn={sortColumn} />
                    <TableRows columns={columns} movies={currentMovies} handleLike={handleLike} onDeleteMovie={onDeleteMovie} />
                </table>}
            </div>
        );
    }
}

export default MoviesTable;