"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenMiddleware = exports.login = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../../db/users/users");
dotenv_1.default.config();
async function login(req, res) {
    const { username, password } = req.body;
    const fetchedUser = await (0, users_1.getUser)(username);
    if (!fetchedUser) {
        return res.status(401).json({ message: 'User does not exist' });
    }
    if (password !== fetchedUser?.password.S) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    jsonwebtoken_1.default.sign({ username }, process.env.JWT_SECRET_KEY, {
        expiresIn: '60s'
    }, (err, token) => {
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
exports.login = login;
async function verifyTokenMiddleware(req, res, next) {
    const { token } = req.headers;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        // Store the decoded information in res.locals
        res.locals.decoded = decoded;
        next();
    });
}
exports.verifyTokenMiddleware = verifyTokenMiddleware;
