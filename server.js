const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('could not connect');
//     }
//     console.log('connected !!!');
//     db.close();
// });

MongoClient.connect(url, (err, client) => {

    const db = client.db('test');

    db.collection('Cars').insertOne({
        _od: 777,
        mode: "Forr",
        year: 2017
    }, (err,res) => {
        if(err) {
            return console.log(`Cannot insert: ${err}`);
        }

        // console.log(res.ops[0]._id.getTimestamp());
    });
    client.close();
});
