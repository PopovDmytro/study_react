import React from 'react';
//
import Joi from 'joi-browser';
//components
import Form from '../common/form';

class NewMovieForm extends Form {

    state = {
        data: {
            _id: Date.now() + '',
            title: '',
            genre: '',
            numberInStock: 0,
            dailyRentalRate: 0
        },
        errors: {},
        genres: []
    };

    async componentDidMount() {
        await this.populatedGenres();
        await this.populateMovie();
    };

    async populatedGenres() {
        const {data} = await this.props.getGenres();
        this.setState({
            genres: [...data]
        });
    }

    async populateMovie() {
        if (this.props.match.params.id === 'new') {
            this.setState({newMovie: true});
        } else {
            const {data: originalMovies} = await this.props.getMovies();
            const movie = {...originalMovies.find((movie) => movie._id === this.props.match.params.id)};
            if (movie._id) {
                movie.genre = movie.genre._id;
                this.setState({data: movie});
            } else {
                this.props.history.replace('/not-found');
            }
        }
    }

    schema = {
        _id: Joi.string().required(),
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required(),
        numberInStock: Joi.number().integer().min(0).label('Stock').required(),
        dailyRentalRate: Joi.number().min(0).max(10).label('Rate').required(),
    };

    doSubmit = async () => {
        const data = {...this.state.data};
        await this.props.saveMovie(data, this.state.newMovie);

        this.props.history.push('/movies');
    };

    render() {
        const {id} = this.props.match.params;
        return (
            <div className="mt-5">
                <h1>{this.state.newMovie ? 'Adding new movie' : 'Current movie id: ' + id}</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect(this.state.genres, 'genre', 'Genre')}
                    {this.renderInput('numberInStock', 'Stock')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton(!this.state.newMovie ? 'Save' : 'Add movie')}
                </form>
            </div>
        );
    }
}

export default NewMovieForm;