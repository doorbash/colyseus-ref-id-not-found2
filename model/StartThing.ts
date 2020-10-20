import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"

export class StartThing extends Schema {
    @type("number")
    type: number;
    
    @type("string")
    title: string;
}