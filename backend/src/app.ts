import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import allowedOrigins from "./config/allowedOrigins";
import routes from "./route";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(allowedOrigins));
app.use(morgan("dev"));

app.use("/", routes);

export default app;