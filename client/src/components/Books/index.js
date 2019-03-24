import React, {Component} from 'react';
import {getBookWithReviewer, clearBookWithReviewer} from '../../actions';
import {connect} from 'react-redux';

class BookView extends Component {

    componentWillMount() {
        this.props.dispatch(getBookWithReviewer(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.props.dispatch(clearBookWithReviewer());
    }

    renderBook = (books) => (
        books.book ?
            <div className="br_container">
                <div className="br_header">
                    <h2>{books.book.name}</h2>
                    <h5>{books.book.author}</h5>
                    <div className="br_reviewer">
                        <span>Review by:</span> {books.reviewer.name} {books.reviewer.lastname}
                    </div>
                </div>
                <div className="br_reviewer">
                    {books.book.reviewer}
                </div>
                <div className="br_box">
                    <div className="left">
                        <div className="">
                            <span>Pages</span> {books.book.pages}
                        </div>
                        <div className="">
                            <span>Price</span> {books.book.price}
                        </div>
                    </div>
                    <div className="right">
                        <span>Rating</span>
                        <div>{books.book.rating}</div>
                    </div>
                </div>
            </div>
            : null
    );

    render() {
        let {books} = this.props;

        return (
            <div>
                {this.renderBook(books)}
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookView);