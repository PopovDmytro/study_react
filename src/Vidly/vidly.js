import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
//
import _ from 'lodash';
//
import TableMessage from './components/tableMessage';
import Pagination from './components/pagination';
import CategoryList from './components/categoryList';
import MoviesTable from './components/moviesTable';
//
import {paginate} from './utils/paginate';
import Like from './common/like';
import Search from './common/search';


export default class Vidly extends Component {

    columns = [
        {path: 'title', label: 'Title', content: movie => (<Link to={`/movies/${movie._id}`}>{movie.title}</Link>)},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {
            key: 'liked', content: movie => (<Like liked={movie.liked} onClick={() => {
                this.handleLike(movie);
            }}/>)
        },
        {
            key: 'delete', content: movie => (<button onClick={() => {
                this.handleDelete(movie);
            }} className="btn btn-danger">Delete</button>)
        }
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
            sortColumn: {path: 'title', order: 'asc'},
            searchString: ''
        };
    }

    async componentDidMount() {
        const {data} = await this.props.getGenres();
        const genres = [{name: 'All Genres', _id: ''}, ...data];

        const {data: movies }= await this.props.getMovies();
        this.setState({movies, genres/*, currentMovies: getMovies()*/});
    }

    handleDelete = async (movie) => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id);

        this.setState({movies});

        try {
            await this.props.deleteMovie(movie._id);
        } catch (e) {
            if(e.response && e.response.status === 404) {
                toast.error('This movie has already been deleted.');
            }
            this.setState({movies: originalMovies});
        }

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
        if (genre) {
            // const currentMovies = this.state.movies.filter( movie => movie.genre._id === genre._id);
            this.setState({/*currentMovies,*/ selectedGenre: genre, currentPage: 1, searchString: ''});
        } else {
            this.setState({/*currentMovies: this.state.movies,*/ selectedGenre: null});
        }
    };

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    };

    handleSearchChange = (searchString) => {
        this.setState({searchString: searchString, selectedGenre: {name: 'All Genres'}, currentPage: 1});
    };

    getPageData = () => {

        const {movies, selectedGenre, searchString, currentPage, sortColumn, perPage} = this.state;

        let filteredMovies = movies;

        if(searchString) {
            filteredMovies = movies.filter(movie => {
                return ~movie.title.toLowerCase().indexOf(searchString.toLowerCase());
            });
        } else if(selectedGenre && selectedGenre._id) {
            filteredMovies = movies.filter(movie => movie.genre._id === selectedGenre._id);
        }

        const sorted = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
        const currentMovies = paginate(sorted, currentPage, perPage);

        return {totalCount: filteredMovies.length, data: currentMovies};
    };

    render() {

        const {totalCount, data: movies} = this.getPageData();

        return (
            <div className="row vidly-section">
                <div className="col-8 offset-4 mt-2">
                    <Link className="btn btn-primary" to="/movies/new">New Movie</Link>
                </div>
                <div className="col-8 offset-4">
                    <TableMessage moviesLength={totalCount}/>
                </div>
                <div className="col-8 offset-4">
                    <Search onSearchChange={this.handleSearchChange} searchValue={this.state.searchString} />
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
                        currentPage={this.state.currentPage}/>
                    }
                </div>
            </div>
        );
    }
}
