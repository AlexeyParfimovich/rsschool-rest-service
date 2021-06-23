import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import { Secret, verify } from 'jsonwebtoken';
import { getByLoginUser } from '../resources/users/user.service';
import { JWT_SECRET_KEY } from "../common/config";

function validateSession(req: Request, res: Response, next: NextFunction): void {
    
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED).send(`Authorization failed: no token provided. `);
    } else {
        verify(token, <Secret>JWT_SECRET_KEY, (_err, decoded) => {
            if (decoded) {
                getByLoginUser(decoded['login'])
                .then(() => {
                    next();
                })
                .catch(err => res.status(StatusCodes.UNAUTHORIZED).send({
                    message: "not authorized",
                    error : err
                }))
            } else {
                res.status(StatusCodes.BAD_REQUEST).send({ error: "not authorized" });
            }
        });
    }
};

export {
    validateSession,
}