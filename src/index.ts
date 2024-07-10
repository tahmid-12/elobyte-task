import express, { Express, Request, Response } from "express";
import mysqlDbConnection from "./db/database";
import { serverConfig } from "./configure/config";

const app: Express = express();
const port = serverConfig.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

mysqlDbConnection.connect();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});