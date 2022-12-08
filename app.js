import express from 'express'
import cors from 'cors'
import session from 'express-session'

import mongoose from "mongoose";


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/foodie', options)

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())

app.listen(4000)