import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import { ACCESS_TOKEN_SECRET } from "../config/jwtConfig";

const jwtChecker = (req: Request, res: Response, next: any) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.sendStatus(401);
    }
    const token = authorization.split(' ')[1];
    jwt.verify(
        token,
        ACCESS_TOKEN_SECRET,
        (err) => {
            if (err) return res.sendStatus(403); //invalid token
            next();
        }
    );
}

export default jwtChecker;