import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//
import _ from 'lodash';
//
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
//
import TableMessage from './components/tableMessage';
import Pagination from './components/pagination';
import CategoryList from './components/categoryList';
import MoviesTable from './components/moviesTable';
//
import {paginate} from './utils/paginate';
import Like from './common/like';


export default class Vidly extends Component {

    columns = [
        {path: "title", label: 'Title', content: movie => (<Link to={`/movies/${movie._id}`} >{movie.title}</Link>)},
        {path: "genre.name", label: 'Genre'},
        {path: "numberInStock", label: 'Stock'},
        {path: "dailyRentalRate", label: 'Rate'},
        {key: "liked", content: movie => (<Like liked={movie.liked} onClick={() => {this.handleLike(movie)}} />) },
        {key: "delete", content: movie => (<button onClick={() => {this.handleDelete(movie);}} className="btn btn-danger">Delete</button>) }
    ];

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            genres: [],
            movieObjFields: this.columns,
            perPage: 4,
            currentPage: 1,
            // currentMovies: [],
            selectedGenre: {name: 'All Genres'},
            sortColumn: {path: "title", order: 'asc'}
        };
    }

    componentDidMount () {
        const genres = [{name: 'All Genres', _id: ''}, ...getGenres()];
        this.setState({movies: getMovies(), genres/*, currentMovies: getMovies()*/});
    }

    handleDelete = (movie) => {
        const movies = [...this.state.movies];
        movies.splice( movies.findIndex((el => el._id === movie._id )), 1);

        this.setState({movies});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked = !movies[index].liked;

        this.setState({movies});
    };

    handleChangePage = (page = 0) => {
        this.setState({currentPage: page});
    };

    handleGenreMovies = (genre) => {
        if(genre) {
            // const currentMovies = this.state.movies.filter( movie => movie.genre._id === genre._id);
            this.setState({/*currentMovies,*/ selectedGenre: genre, currentPage: 1});
        } else {
            this.setState({/*currentMovies: this.state.movies,*/ selectedGenre: null});
        }
    };

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    };

    // currentMovies = (movies, page, perPage = 5) => {
    //     if(!movies.length) movies = this.state.movies;
    //     let start = page * perPage;
    //     const moviesArr = movies.slice(start, start + perPage);
    //     return moviesArr;
    // };

    getPageData = () => {

        const filteredMovies = this.state.selectedGenre && this.state.selectedGenre._id ?  this.state.movies.filter(movie => movie.genre._id === this.state.selectedGenre._id) : this.state.movies ;
        const sorted = _.orderBy(filteredMovies, [this.state.sortColumn.path], [this.state.sortColumn.order]);
        const currentMovies = paginate(sorted, this.state.currentPage, this.state.perPage);

        return {totalCount: filteredMovies.length, data: currentMovies};
    };

    render() {

        const {totalCount, data: movies} = this.getPageData();

        return  (
        <div className="row vidly-section" >
            <div className="col-8 offset-4">
                <TableMessage moviesLength={totalCount} />
            </div>
            <div className="col-4">
                <CategoryList
                    onCategoryIdChange={this.handleGenreMovies}
                    genres={this.state.genres}
                    selectedGenre={this.state.selectedGenre}
                />
            </div>
            <div className="col-8">
                <MoviesTable
                    columns={this.columns}
                    sortColumn={this.state.sortColumn}
                    onSort={this.handleSort}
                    movieObjFields={this.state.movieObjFields}
                    currentMovies={movies}
                    handleLike={this.handleLike}
                    onDeleteMovie={this.handleDelete}/>
                {!!this.state.movies.length &&
                <Pagination
                    onChangePage={this.handleChangePage}
                    pages={Math.ceil(totalCount / this.state.perPage)}
                    currentPage={this.state.currentPage} />
                }
            </div>
        </div>
        );
    }
}
