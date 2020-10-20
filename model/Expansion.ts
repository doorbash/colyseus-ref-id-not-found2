import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"

export class Expansion extends Schema {
    @type("number")
    id: number;
    
    @type("string")
    title: string;
    
    @type("string")
    icon: string;
    
    @type("boolean")
    select: boolean;
}