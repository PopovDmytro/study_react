
export function moviesList() {

    return {
        type: 'MOVIES_LIST',
        payload: [
            {id:"1", name: "Pulp Fiction"},
            {id:"2", name: "True lies"},
            {id:"3", name: "Rambo"}
        ]
    };
}

export function directorsList() {

    return {
        type: 'DIR_LIST',
        payload: [
            {id:"1", name: "Tarantino"},
            {id:"2", name: "Dir 1"},
            {id:"3", name: "Dir 2"}
        ]
    };
}