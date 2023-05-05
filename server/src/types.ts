/**
 * This file contains all types used in the server
 */

type TUser = {
    username: string;
    first_name?: string;
    last_name?: string;
    password: string;
}

type AttributeValueString = {
    S: string;
}
  
type TUserDB = {
    id: AttributeValueString;
    password: AttributeValueString;
}

type TUserTokenInputPayload = {
    username: string;
}

type TUserTokenPayload = TUserTokenInputPayload & {
    iat: number;
    exp: number;
}