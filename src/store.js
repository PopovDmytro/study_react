import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

//Reducers

const firebaseConfig = {
    apiKey: "AIzaSyDAz6bf0-oljW63IEV0CS82AT9r9Zwctoo",
    authDomain: "skillful-cosine-237116.firebaseapp.com",
    databaseURL: "https://skillful-cosine-237116.firebaseio.com",
    projectId: "skillful-cosine-237116",
    storageBucket: "skillful-cosine-237116.appspot.com",
    messagingSenderId: "442117149458",
    appId: "1:442117149458:web:f64baeeb8b73622b"
};

//react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

//Create initial state
const initialState = {};

//Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;