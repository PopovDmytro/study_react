import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
//
// import {getMovies, saveMovie, deleteMovie} from '../services/fakeMovieService';
// import {getGenres} from '../services/fakeGenreService';
import {getMovies, saveMovie, deleteMovie} from '../services/movieService';
import {getGenres} from '../services/genreService';
import auth from '../services/authService';
//
import NavBar from './navbar/navbar';
import Vidly from './vidly';
import Customers from './pages/customers';
import Rentals from './pages/rentals';
import MovieForm from './pages/movieForm';
import NotFound from './pages/notFound';
import LoginForm from './pages/loginForm';
import Logout from './pages/logout';
import RegisterForm from './pages/registerForm';
//
import 'react-toastify/dist/ReactToastify.css';

class RoutesVidly extends Component {
    state = {};

    componentDidMount() {
        const user = auth.getCurrentUser();
        if (user) {
            this.setState({user});
        }
    }

    render () {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar user={this.state.user} />
                    <ToastContainer/>
                    <div className="container">
                        <Switch>
                            <Route path="/login" component={LoginForm}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/register" component={RegisterForm}/>
                            <Route path="/movies/:id" component={(props) => <MovieForm getMovies={getMovies} getGenres={getGenres} saveMovie={saveMovie} {...props} />} />
                            <Route path="/movies" exact component={(props) => <Vidly getMovies={getMovies} getGenres={getGenres} saveMovie={saveMovie} deleteMovie={deleteMovie} {...props} />} />
                            <Route path="/customers" component={Customers} />
                            <Route path="/rentals" component={Rentals} />
                            <Route path="/not-found" component={NotFound} />
                            <Redirect from="/" exact to="/movies"/>
                            <Redirect to="/not-found"/>
                        </Switch>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    };

};

export default RoutesVidly;
