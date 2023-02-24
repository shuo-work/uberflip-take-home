import { Request, Response } from "express";
import bcrypt from 'bcryptjs';

import { getUserByEmailQuery } from "../query/usersQuery";
import { generateTokens } from "../helper/jwtHelper";

const postLogin = async (req: Request, res: Response) => {
    try {
        const { cookies, body } = req;
        const { email, password } = body;
        if (!email || !password) {
            res.send(400).send('Invalid request parameters');
        }
        const queryData = await getUserByEmailQuery(email);
        if (queryData.rows.length === 0) {
            res.sendStatus(401);
        }
        const savedUser = queryData.rows[0];
        const { password: savedPassword } = savedUser;
        const isSame = await bcrypt.compare(password, savedPassword);
        if (!isSame) {
            res.sendStatus(401);
        }
        const accessToken = generateTokens(res, email, cookies);
        res.status(200).send({ accessToken });
    } catch (err) {
        console.log(err);
        res.status(500).send('Login failed.');
    }
}

export {
    postLogin,
};
