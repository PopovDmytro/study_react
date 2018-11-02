import React, {Component} from 'react';

class TableHeader extends Component {

    renderSortIcon = column => {
        const {sortColumn} = this.props;
        if(column.path !== sortColumn.path) return null;
        if(sortColumn.order === 'asc') return <i className="fa-sort-asc fa"></i>;
        return <i className="fa-sort-desc fa"></i>;
    };

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn);
    };

    render() {

        const { movieFields } = this.props;

        return (
            <thead>
            <tr>
                {movieFields.map( (field, i) => <th onClick={() => {this.raiseSort(field.path)}} key={i}>{field.label} {this.renderSortIcon(field)}</th> )}
            </tr>
            </thead>
        );
    }
}

export default TableHeader;
