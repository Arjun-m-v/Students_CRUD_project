const express = require('express')
const dotenv = require('dotenv');
// const mySqlPool = require('./config/db');
const morgan = require("morgan")
const cors = require('cors');
const db = require('./models/index.js')

dotenv.config();


const app = express()



//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


db.sequelize.sync().then(()=>{
    console.log('Synced successfully');
})



//routes
app.use('/student',require('./routes/StudentRoutes.js'))
app.use('/user',require('./routes/UserRoutes.js'))
app.use('/auth',require('./routes/AuthRoutes.js'))

app.get('/test',(req,res)=>{
    res.status(200).send('<h1>Node js Mysql</h1>')
})
const PORT = process.env.PORT || 3001; 

// mySqlPool.query('SELECT 1').then(()=>{
//     console.log('MYSQL DB CONNECTED');
    
    //listen
    app.listen(PORT,() => {
        console.log(`Server Running on port ${process.env.PORT}`);
    
//     }) 
// }).catch((error) => {
//     console.log(error);
    
})
