// node modules
import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";

import userRouter from './router/userRouter.mjs';

mongoose.connect("mongodb://localhost:27017/vctest");

// middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'))

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use('/*', cors(corsOptions), (req, res, next) => {
    next();
})


// routers
app.use(userRouter);

app.listen(2300, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server running on 2300..");
    }
})