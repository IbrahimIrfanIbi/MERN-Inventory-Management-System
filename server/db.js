
// //call the mysql module
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'maptest',
//     port:process.env.MYSQLPORT
// })

// connection.connect(function(err){
//     if(err){
//         throw err;
//     }
//     else{
//         console.log('Database Connected Successfully');
//     }
// })

// //to export connection 
// module.exports = connection


const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI; // Use the connection string from the environment variables

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

const db = mongoose.connection;

module.exports = db;





    // const document = { name: 'sample', value: 42 };
    // const result = await collection.insertOne(document);
    // console.log(`New document inserted with the _id: ${result.insertedId}`);
