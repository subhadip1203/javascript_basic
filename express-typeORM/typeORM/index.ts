import "reflect-metadata";
import {createConnection} from "typeorm";
const DbConf = require('./ormconfig.json');

export const mainFunc = async () =>{
    try{
        await createConnection(DbConf);
        console.log("DB connection is successful")
    }
    catch(err){
        console.log(err)
    }
}

