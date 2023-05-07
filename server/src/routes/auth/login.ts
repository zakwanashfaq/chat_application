import dotenv from 'dotenv';
import jwt, {Secret} from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { getUser } from '../../db/users/users';

dotenv.config();

export async function login(req: Request, res: Response) {
    const {username, password} = req.body as any;

    const fetchedUser: TUserDB | null = await getUser(username);
    
    if (!fetchedUser) {
        return res.status(401).json({ message: 'User does not exist'});
    }
    if (password !== fetchedUser?.password.S) {
        return res.status(401).json({ message: 'Invalid credentials'});
    }   
    
    jwt.sign({ username } as TUserTokenInputPayload, process.env.JWT_SECRET_KEY as Secret, {
        expiresIn: '30d'
    }, (err: Error | null, token?: string) => {
        if (err) {
            res.status(500).json({ message: err.message });
        }
         else if (token) {
            res.status(200).json({ token });
        }
         else {
            res.status(500).json({ message: 'Token generation failed' });
         }
    });
}

export async function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const { token } = req.headers as any;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY as Secret, (err: Error | null, decoded: any | undefined) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }

        // Store the decoded information in res.locals
        res.locals.decoded = decoded;
        next();
    });
}
