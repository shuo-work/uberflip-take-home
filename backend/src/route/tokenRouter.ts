import express from "express";

import { getRefreshAccessToken } from "../controller/tokenController"; 

const tokenRouter = express.Router();

tokenRouter.get('/refreshAccessToken', (req, res) => 
    getRefreshAccessToken(req, res)
);

export default tokenRouter;
