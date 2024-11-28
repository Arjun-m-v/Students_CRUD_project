const mysql = require('mysql2');


const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    PORT: 3001,
    password: 'root',
    database: 'crud',
})



Connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to database");
    
})