import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import { REFRESH_TOKEN_SECRET } from "../config/jwtConfig";
import { generateAccessToken } from "../helper/jwtHelper";
import { getUserByEmailQuery } from "../query/usersQuery";

const getRefreshAccessToken = async (req: Request, res: Response) => {
    try {
        const { cookies, query } = req;
        const { email } = query;
        const refreshToken = cookies?.jwt;
        if (!cookies || !refreshToken || !email || typeof email !== "string") {
            return res.sendStatus(401);
        }
        const data = await getUserByEmailQuery(email);
        if (!data.rows || !data.rows[0]) {
            return res.sendStatus(401);
        }

        jwt.verify(
            refreshToken,
            REFRESH_TOKEN_SECRET,
            async (err: any) => {
                if (err) {
                    return res.sendStatus(403);
                }
                const accessToken = generateAccessToken(email);
                res.status(200).send({ accessToken });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).send('Refresh access token failed.');
    }
}

export {
    getRefreshAccessToken,
};
