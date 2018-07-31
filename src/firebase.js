import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiQAGRnFZDCM2TKDifGdiIhr_IBovDsBQ",
    authDomain: "forms-test-2ec87.firebaseapp.com",
    databaseURL: "https://forms-test-2ec87.firebaseio.com",
    projectId: "forms-test-2ec87",
    storageBucket: "forms-test-2ec87.appspot.com",
    messagingSenderId: "524990955226"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB.ref('green').set('brown')
    .then( () => {console.log('data saved')})
    .catch((e) => {console.log(e);});

// firebase.database().ref().set('it works');