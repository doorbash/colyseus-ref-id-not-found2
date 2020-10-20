import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"

let shortid = require('shortid');

export class Message extends Schema {
    @type("string")
    id: string = shortid.generate();

    @type("string")
    text: string;

    @type("string")
    sender: string;

    @type("int64")
    time: number = Date.now();
}