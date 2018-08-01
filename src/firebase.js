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

//set update delete
// firebaseDB.ref('eyes').set(null)
/*
firebaseDB.ref().update({
    name: "steve",
    'car/color': 'white'
})
.then( () => {console.log('data saved')})
.catch((e) => {console.log(e);});
*/

// firebaseDB.ref('eyes').set(null) -> set(null) will delete 'eyes' from firebase

// firebase.database().ref().set('it works');

//get data
/*
firebaseDB.ref('car/brand').once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    })
    .catch((e) => {
        console.log(e);
    });
*/
//updating data on change in firebase
/*
firebaseDB.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});
*/

/*
setTimeout(()=> {
    firebaseDB.ref('name').set('name before off');
}, 2000);

setTimeout(()=> {
    firebaseDB.ref().off();
}, 4000);

setTimeout(()=> {
    firebaseDB.ref('name').set('name after off');
}, 7000);
*/

// firebaseDB.ref().on('child_removed', (snapshot) => {
// firebaseDB.ref().on('child_changed', (snapshot) => {
/*
firebaseDB.ref().on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
*/

//firebase array
/*
firebaseDB.ref('users').push({
    name: 'randy',
    lastname: 'Martial'
});
*/
/*
firebaseDB.ref('users/-LIr0PuBNIfPdaEcUPxy').once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    });
*/
/*
firebaseDB.ref('users/-LIr0PuBNIfPdaEcUPxy').update({
   lastname: "updated name"
});
*/
/*
firebaseDB.ref('users').once('value').then((snapshot) => {
    const users = [];

    snapshot.forEach((childSnapshot) => {
        users.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(users);
});
*/
/*
firebaseDB.ref('users').orderByChild('age').once('value').then((snapshot) => {
    const users = [];

    snapshot.forEach((childSnapshot) => {
        users.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(users);
});
*/
/*
firebaseDB.ref('users').limitToFirst(2).once('value').then((snapshot) => { //limitToLast
    const users = [];

    snapshot.forEach((childSnapshot) => {
        users.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(users);
});
*/
/*
firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value').then((snapshot) => { //limitToLast
    console.log(snapshot.val());
});
*/
