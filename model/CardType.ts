import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"

export class CardType extends Schema {
    @type("uint16")
    id: number;
    
    @type("string")
    title: string;
}