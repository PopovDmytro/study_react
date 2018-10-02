const os = require('os');
const fs = require('fs');

const userData = require("./user.js");

// const plat = os.platform();

// console.log(userData);

if(userData.addLog()) {

    const user = os.userInfo();
    let date = new Date();
    let message = `User "${user.name}" started App at ${date}`;
    fs.appendFile("hello.txt", message, (err) => {
        if(err) console.log('not able to append');
    });
}
