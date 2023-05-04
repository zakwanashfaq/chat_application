"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const db_1 = __importDefault(require("../db"));
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
async function addUser(params) {
    const Item = {
        "id": { S: "dfgfgfg" },
        "anotherAttribute": { S: "sfvfsvfvssfv" },
    };
    // validate item first from the validators
    const command = new client_dynamodb_1.PutItemCommand({
        TableName: "real_time_chat_app",
        Item
    });
    db_1.default.send(command)
        .then(() => {
        console.log("success");
    }).catch((err) => {
        console.log(err);
    });
}
exports.addUser = addUser;
