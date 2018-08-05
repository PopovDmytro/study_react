import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCZEOVlFaIFkpEeFhqjGQT8_iPbIhbtUmY",
    authDomain: "nba-full-2a5e9.firebaseapp.com",
    databaseURL: "https://nba-full-2a5e9.firebaseio.com",
    projectId: "nba-full-2a5e9",
    storageBucket: "nba-full-2a5e9.appspot.com",
    messagingSenderId: "1016076634767"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
};

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
};