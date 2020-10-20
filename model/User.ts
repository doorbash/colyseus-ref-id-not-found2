import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"

export class User extends Schema {
    @type("string")
    id: string;

    @type("string")
    name = "";
    
    @type("string")
    photoUrl = "";

    @type("boolean")
    is_typing = false;
}