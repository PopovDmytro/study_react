//1_ Action return an object
/*
const action = {
    type: 'MOVIES_LIST',
    payload: [
        {id:"1", name: "Pulp Fiction"},
        {id:"2", name: "True lies"}
    ]
};
*/

//2_ Reducer finds a match

export default function (state = {}, action) {

    //simple example of reducer return data
    switch (action.type) {
        case 'MOVIES_LIST':
            return {...state, movies: action.payload};
            // break;
        case 'DIR_LIST':
            return {...state, directors: action.payload};
        // break;
        default:
            return state;
    }
}