const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(
    cors({
        origin: 'http://localhost:4200',
        methods: ["GET", "POST", "DELETE", "PATCH"],
        Credential:true
    })
)

const port = 4300

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected');

        app.listen(port, () => {
            console.log('app listening on port', port);
        })
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

connect()



app.use('/api/v1', userRoutes)