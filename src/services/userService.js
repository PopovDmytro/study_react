import http from './httpService';
//
import {vidlyUsersApiEndpoint} from '../config';

export function register(user) {
    return http.post(vidlyUsersApiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name,
    });
}