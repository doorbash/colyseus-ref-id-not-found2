import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"

export class ServerMessage extends Schema {
    @type("number")
    code: number;

    @type("string")
    message: string;
}