const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors');
const cors = require('cors');

const  app = express();
dotenv.config({path: ".env"});
connectDB();
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173',  // Frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));

const task = require('./routes/task');

app.use('/api/v1', task);


const PORT = process.env.PORT

app.listen(PORT, console.log(`SERVER RUNNING ON ${PORT}`))
