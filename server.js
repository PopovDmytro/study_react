const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/test';

mongoose.Promise = global.Promise;
mongoose.connect(url);

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car', carSchema);

// const addCar = new Car({
//     brand: "Mersedes",
//     model: "cl",
//     year: 2015,
//     avail: true
// });

/* insert */

// addCar.save((err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// });

/* get */

// Car.find({_id: "5bc43fd620debd32b023bfa2"}, (err, doc) => {
// Car.findById("5bc43fd620debd32b023bfa2", (err, doc) => {
//     if(err) return console.log(err);

//     console.log(doc);
// });

/* delete */

// Car.findOneAndRemove({brand: "Ford"}, (err, doc) => {
// Car.findByIdAndRemove("5bc43fd620debd32b023bfa2", (err, doc) => {
// Car.remove({}, (err, doc) => {                                           // wipe database
// Car.remove({year: 2000}, (err, doc) => {
//     if(err) return console.log(err);

//     console.log(doc);
// });

/* upgrade */

// Car.update(
//     {_id: "5bc43fd620debd32b023bfa2"},
//     {$set: {brand: "Traban"}},
//     (err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// });

// Car.findByIdAndUpdate(
//     "5bc43fd620debd32b023bfa2",
//     {$set: {brand: "Skoda"}},
//     (err, doc) => {
//         if(err) return console.log(err);
//         console.log(doc);
//     }
// );

/**
 * 
 */
Car.findById("5bc43fd620debd32b023bfa2", (err, car) => {
    if(err) return console.log(err);

    car.set({
        brand: "Porche"
    });

    car.save((err, doc) => {
        if(err) return console.log(err);
        console.log(doc);
    });
})