import * as express from "express";
import {Request, Response} from "express";

import { mainFunc } from '../typeORM/index'
import {getRepository} from "typeorm";
import {User} from '../typeORM/entity/User'

import routes from './routes';

mainFunc();
// create and setup express app
const app = express();
app.use(express.json());

// register routes

app.get("/", async function(req: Request, res: Response) {
  const data = await getRepository(User).find();
  res.send(data)
});

app.use('/api', routes);

const PORT = 3000
// start express server
app.listen(PORT , () => console.log(`server running on http://localhost:${PORT}`));