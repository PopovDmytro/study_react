import http from './httpService';
//
import {vidlyMoviesApiEndpoint} from '../config';

export function getMovies() {
    return http.get(vidlyMoviesApiEndpoint);
}

export function getMovie(id) {
    return http.get(movieUrl(id));
}

export function saveMovie(movie, newMovie) {
    const body = {...movie};
    body.genreId = body.genre;
    delete body._id;
    delete body.genre;

    if (!newMovie) {
        return http.put(movieUrl(movie._id), body);
    }

    return http.post(vidlyMoviesApiEndpoint, body);
}

export async function deleteMovie(id) {
    await http.delete(movieUrl(id));
}

//helpers
function movieUrl (id) {
    return `${vidlyMoviesApiEndpoint}/${id}`;
}