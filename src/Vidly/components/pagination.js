import React from 'react';
//
// import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({currentPage, onChangePage, pages}) => {

    const getPagesLi = () => {
        const liArr = [];
        for(let i = 1; i <= pages; i++ ) {
            liArr.push(<li key={i} className={"page-item" + (i === currentPage ? ' active' : '')} ><span onClick={() => { onChangePage(i) }} className="page-link" data-href={"?page=" + i}>{i}</span></li>)
        }
        return liArr.length > 1 ? liArr : null;
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {currentPage > 1 ?
                    <li className="page-item">
                    <span onClick={() => { onChangePage(currentPage - 1) }} className="page-link" data-href={currentPage - 1} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </span>
                    </li>
                    :
                    null
                }
                {getPagesLi()}
                {currentPage < pages ?
                    <li className="page-item">
                        <span onClick={() => { onChangePage(currentPage + 1) }} className="page-link" data-href={currentPage + 1} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </span>
                    </li>
                    :
                    null
                }
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    pages: PropTypes.number.isRequired
};

export default Pagination;
