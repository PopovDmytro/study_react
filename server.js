const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('could not connect');
//     }
//     console.log('connected !!!');
//     db.close();
// });

// MongoClient.connect(url, (err, client) => {

//     const db = client.db('test');

//     const cars = [
//         {model: "Fiat", year: 1999},
//         {model: "Lancia", year: 1986},
//         {model: "Nissan", year: 2000}
//     ];

//     // db.collection('Cars').insert(cars, (err,res) => { // insert can be with single and multiple 
//     db.collection('Cars').insertMany(cars, (err,res) => {
//         if(err) {
//             return console.log(`Cannot insert: ${err}`);
//         }

//         // console.log(res.ops[0]._id.getTimestamp());
//     });
//     client.close();
// });

MongoClient.connect(url, (err, client) => {
    const db = client.db('test');

    // db.collection('Cars').find({year: 2000})  //find() get all data from collection 'Cars'
    // .skip(1) //skip element
    // .limit(1) //limit get elements
    // .sort({"_id": -1}) //sort get elements //-1 get elements form the end
    // .toArray()
    // .then(data => { //promise
        // console.log(data);
    // });

    db.collection('Cars').findOne({year: 2000}, {model: 0, year: 0}, (err, doc) => {console.log(doc)})

    client.close();
});
