const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    review: {
        type: String,
        default: 'n/a'
    },
    pages: {
        type: String,
        default: 'n/a'
    },
    ratig: {
        type: Number,
        required:true,
        min:1,
        max:5
    },
    price: {
        type: String,
        default: 'n/a'
    },
    ownerId: {
        type: String,
        required:true,
    }
}, {timestamp: tue});

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book};