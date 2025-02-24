import express from "express";
import cookieParser from "cookie-parser";
// import logger from "morgan";
import usersRouter from "./routes/usersRouter"
import statementsRouter from "./routes/statementsRouter";
import statisticsRouter from "./routes/statisticsRouter";

import {config} from "dotenv";
import * as mongoose from "mongoose";
config()

const index = express();
const port = process.env.PORT ?? "8081"
const dbUrl = process.env.DB_CONNECT ?? "mongodb://127.0.0.1:27017/myapp"

// index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(cookieParser(process.env.SECRET))

index.use('/users', usersRouter);
index.use('/statements', statementsRouter);
index.use('/statistics', statisticsRouter);

async function main(){
    await mongoose.connect(dbUrl)
    index.listen(port)
}

main()
    .then(() => console.log("Server is running on port: " + port))
    .catch(er => {
        console.error(er)
        process.exit(1)
    })
