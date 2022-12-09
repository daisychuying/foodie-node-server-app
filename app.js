import express from 'express'
import cors from 'cors'
import session from 'express-session'

import mongoose from "mongoose";

import UsersController from "./users/users-controller.js";
import BookmarksController from "./bookmarks/bookmarks-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}
const CONNECTION_STRING = 'mongodb+srv://foodie:pHBlAspCsTlsX0Ay@cluster0.fflj4z3.mongodb.net/foodie?retryWrites=true&w=majority'
// const CONNECTION_STRING = 'mongodb://localhost:27017/foodie';
mongoose.connect(CONNECTION_STRING, options)

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

// Controllers
UsersController(app)
BookmarksController(app);

app.listen(4000)