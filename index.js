const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors');


const  app = express();
dotenv.config({path: ".env"});
connectDB();
app.use(express.json())

const task = require('./routes/task');

app.use('/api/v1', task);


const PORT = process.env.PORT

app.listen(PORT, console.log(`SERVER RUNNING ON ${PORT}`))
