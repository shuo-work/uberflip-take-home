import express from "express";

import { postRegister } from "../controller/registerController";

const registerRouter = express.Router();

registerRouter.post('/register', (req, res) => 
    postRegister(req, res)
);

export default registerRouter;