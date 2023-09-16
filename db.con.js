const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3307,
    user: 'root',
    password: '',
    database: 'pharmpod'
})
connection.connect((error) => {
    if (!!error) {
console.log('there is an error bro!'+error)
    }else{
        console.log('connected to datbase!')
    }
})

module.exports = connection;