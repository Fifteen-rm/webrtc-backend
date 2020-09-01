import express, { Request, Response } from "express";
import * as signalConfig from './config/signalConfig';
import cors from "cors";
import { Logger } from "tslog";
import { videoToken } from './tokens';


const log: Logger = new Logger({ name: "index logger" });

const app = express()
app.use(cors());

const sendTokenResponse = (token: any, res: Response) => {
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
};

app.get('/api/greeting', (req:Request, res:Response) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/video/token', (req:Request, res:Response) => {
  const identity:string = req.query.identity?.toString() ?? '';
  const room:string = req.query.room?.toString() ?? '';
  const token:string = videoToken(identity, room, signalConfig.getSiganlConfig());
  sendTokenResponse(token, res);

});
app.post('/video/token', (req:Request, res:Response) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, signalConfig.getSiganlConfig());
  sendTokenResponse(token, res);
});


app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
})  

app.listen(8000, "0.0.0.0", ()=>{
  log.debug('running server');
})    


