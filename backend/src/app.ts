import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.post("/register", (req: Request, res: Response) => {
  res.send("Registered");
});

app.post("/login", (req: Request, res: Response) => {
  res.send("Authorized");
});

app.get("/countries/:country", (req: Request, res: Response) => {
  res.send("List of Countries");
});

export default app;