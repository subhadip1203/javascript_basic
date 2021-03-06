import express = require('express');
const app = express()
const PORT = 3000
import {clientRoutes} from './routes'

import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./typeorm/entity/User";

const mainFunc = async () =>{
    try{
        await createConnection();
        console.log("DB connection is successful")

        app.use(express.json());
        app.use(clientRoutes);
        app.listen( PORT , () =>  console.log("app running http://localhost:"+PORT) )
    }
    catch(err){
        console.log(err)
    }
}

mainFunc()

// createConnection().then(async connection => {

//     console.log("connection is successful")
//     // console.log("Inserting a new user into the database...");
//     // const user = new User();
//     // user.firstName = "Timber";
//     // user.lastName = "Saw";
//     // user.age = 25;
//     // await connection.manager.save(user);
//     // console.log("Saved a new user with id: " + user.id);

//     // console.log("Loading users from the database...");
//     // const users = await connection.manager.find(User);
//     // console.log("Loaded users: ", users);

//     //console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
