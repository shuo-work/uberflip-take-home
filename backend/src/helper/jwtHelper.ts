import jwt from 'jsonwebtoken';
import { Response } from "express";

import {
    ACCESS_TOEKN_TS,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_TS,
    REFRESH_TOKEN_SECRET,
} from '../config/jwtConfig';

const generateAccessToken = (email: string) => {
    return jwt.sign(
        {
            "UserInfo": {
                "email": email,
            }
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_TOEKN_TS },
    );
}

const generateRefreshToken = (email: string) => {
    return jwt.sign(
        { "email": email },
        REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_TOKEN_TS },
    );
}

const generateTokens = (res: Response, email: string, reqCookies: any) => {
    const newAccessToken = generateAccessToken(email);
    const newRefreshToken = generateRefreshToken(email);
    if (reqCookies && reqCookies.jwt) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
    }
    res.cookie('jwt', newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000
    });
    return newAccessToken;
}

export {
    generateAccessToken,
    generateRefreshToken,
    generateTokens,
}
