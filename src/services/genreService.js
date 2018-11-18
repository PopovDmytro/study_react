import http from './httpService';
//
import {vidlyGenresApiEndpoint} from '../config';

export function getGenres ()  {
    return http.get(vidlyGenresApiEndpoint);
}
