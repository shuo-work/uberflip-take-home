import { Request, Response } from "express";
import bcrypt from 'bcryptjs';

import { createUserQuery, getUserByEmailQuery } from "../query/usersQuery";
import { generateTokens } from "../helper/jwtHelper"; 
import { NAME_REG, EMAIL_REG, PASSWORD_REG } from "../../constant";

const postRegister = async (req: Request, res: Response) => {
    try {
        const { cookies, body } = req;
        const { firstName, lastName, email, password } = body;

        let isParamValid = NAME_REG.test(firstName);
        isParamValid &&= NAME_REG.test(lastName);
        isParamValid &&= EMAIL_REG.test(email);
        isParamValid &&= PASSWORD_REG.test(password);

        if (!isParamValid) {
            res.send(400).send('Invalid request parameters');
        }

        const dupUser = await getUserByEmailQuery(email);
        if (dupUser.rows.length > 0) {
            res.sendStatus(409); // user already exist
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        await createUserQuery({ firstName, lastName, email, encryptedPassword });
        const accessToken = generateTokens(res, email, cookies);
        res.status(200).send({ accessToken });
    } catch (err) {
        console.error(err)
        res.status(500).send("Register failed.");
    }
}

export {
    postRegister
};
