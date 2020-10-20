import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"
import {CardType} from "./CardType";

export class Card extends Schema {

    constructor(id: number, category: number, title: string, types: ArraySchema<CardType>, expansionId: number,
                        reckoning: boolean, cost: number, frontSide: string, flipSide: string) {
                        
        super();
        this.id = id;
        this.category = category;
        this.title = title;
        this.types = types;
        this.expansionId = expansionId;
        this.reckoning = reckoning;
        this.cost = cost;
        this.frontSide = frontSide;
        this.flipSide = flipSide;
        this.current = false;
        this.flipped = false;
    }

    @type("uint16")
    id: number;
    
    @type("uint16")
    category: number;
    
    @type("string")
    title: string;
    
    @type([CardType])
    types = new ArraySchema<CardType>();
    
    @type("uint16")
    expansionId: number;
    
    @type("boolean")
    reckoning: boolean;
    
    @type("uint16")
    cost = 0;
    
    @type("string")
    frontSide: string;
    
    @type("string")
    flipSide: string;
    
    @type("boolean")
    current: boolean;
    
    @type("boolean")
    flipped: boolean;
    
    clon(): Card {
        return new Card(this.id, this.category, this.title, this.types, this.expansionId,
                                    this.reckoning, this.cost, this.frontSide, this.flipSide);
    }
}