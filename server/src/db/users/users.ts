import client from "../db";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";

export async function addUser(params: any) {
    const Item  = {
        "id": { S: "dfgfgfg" },
        "anotherAttribute": { S: "sfvfsvfvssfv" },
    };

    // validate item first from the validators

    const command = new PutItemCommand({
        TableName: "real_time_chat_app",
        Item
    });

    client.send(command)
    .then(()=> {
        console.log("success");
    }).catch((err)=> {
        console.log(err);
    });
}