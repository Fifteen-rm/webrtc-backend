import express, { Request, Response } from "express";
import * as signalConfig from './config/signalConfig';
import cors from "cors";
import { Logger } from "tslog";
const log: Logger = new Logger({ name: "index logger" });

const app = express()
app.use(cors());



app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
})

app.listen(8000, "0.0.0.0", ()=>{
    signalConfig.getSiganlConfig();
})