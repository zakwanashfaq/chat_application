import client from "../db";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";

export async function addUser(params: TUser): Promise<boolean> {
    // todo: check if user exists forst
    
    const Item  = {
        "id": { S: "dfgfgfg" },
        "anotherAttribute": { S: "sfvfsvfvssfv" },
    };

    const command = new PutItemCommand({
        TableName: "real_time_chat_app",
        Item
    });

    let addedUser: boolean = false;
    await client.send(command)
        .then((res)=> {
            addedUser = true;
        }).catch((err)=> {
            console.log(err);
            addedUser =  false;
        });
        
    return addedUser;
}


export async function getUser(id: string) : Promise<TUserDB | null> {
    const Key = {
        "id": { S: id },
    };

    const command = new GetItemCommand({
        TableName: "real_time_chat_app",
        Key
    });

    let user:TUserDB | null = null;

    await client.send(command)
        .then((response) => {
            if (response.Item) {
                user = response.Item as unknown as TUserDB;
            } else {
                console.log(`Item with id '${id}' not found`);
            }
        })
        .catch((err) => {
            return null;
        });

    return user;
}
