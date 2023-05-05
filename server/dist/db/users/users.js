"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.addUser = void 0;
const db_1 = __importDefault(require("../db"));
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
async function addUser(params) {
    // todo: check if user exists forst
    const Item = {
        "id": { S: "dfgfgfg" },
        "anotherAttribute": { S: "sfvfsvfvssfv" },
    };
    const command = new client_dynamodb_1.PutItemCommand({
        TableName: "real_time_chat_app",
        Item
    });
    let addedUser = false;
    await db_1.default.send(command)
        .then((res) => {
        addedUser = true;
    }).catch((err) => {
        console.log(err);
        addedUser = false;
    });
    return addedUser;
}
exports.addUser = addUser;
async function getUser(id) {
    const Key = {
        "id": { S: id },
    };
    const command = new client_dynamodb_1.GetItemCommand({
        TableName: "real_time_chat_app",
        Key
    });
    let user = null;
    await db_1.default.send(command)
        .then((response) => {
        if (response.Item) {
            user = response.Item;
        }
        else {
            console.log(`Item with id '${id}' not found`);
        }
    })
        .catch((err) => {
        return null;
    });
    return user;
}
exports.getUser = getUser;
