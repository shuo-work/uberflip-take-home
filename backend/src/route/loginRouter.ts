import express from "express";

import { postLogin } from "../controller/loginController";

const loginRouter = express.Router();

loginRouter.post('/login', (req, res) => 
    postLogin(req, res)
);

export default loginRouter;