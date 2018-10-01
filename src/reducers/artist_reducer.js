export default function (state = {}, action) {

    switch (action.type) {
        case 'GET_ARTISTS':
            return {...state, artistsList:action.payload};
        case 'GET_ARTISTS_ALL':
            return {...state, artistsList:action.payload};
        case 'GET_ARTISTS_DETAIL':
            return {...state, artistsData:action.payload};
        case 'CLEAR_ARTISTS_DETAIL':
            return {...state, artistsData:action.payload};
        default:
            return state;
    }
}