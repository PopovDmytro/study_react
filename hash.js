const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err, salt) => {
//     if(err) return next(err);

//     bcrypt.hash('password123', salt, (err, hash) => {
//         if(err) return next(err);
//         console.log(hash);
//     })

//     console.log(salt);
// });

/* pass hashing
*  simple example 
*/

// const secret = 'mysecretpassword';
// const secretSalt = 'sdfsdfasdfasdfsdfsdfsdfsdfsdf';

// const user = {
//     id: 1,
//     token: MD5('SDSDSDSD').toString() + secretSalt
// }

// const receivedToken = 'c61bf77e5dfd6bc815729ede6b2eff11sdfsdfasdfasdfsdfsdfsdfsdfsdf';

// if(receivedToken === user.token) {
//     console.log('move forward');
// }

// console.log(user);

/* jason web tokens (JWTs) */

const id = '1000';
const secret = 'supersecret';

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken);


