import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"
import { Card } from './Card';

export class Investigator extends Schema {
    @type("uint16")
    id: number;
    
    @type("string")
    name: string;
    
    @type("string")
    occupation: string;
    
    @type("uint16")
    physiologicalIndex: number;
    
    @type("uint16")
    psychologicalIndex: number;
    
    @type("uint16")
    lore: number;
    
    @type("uint16")
    influence: number;
    
    @type("uint16")
    observation: number;
    
    @type("uint16")
    strength: number;
    
    @type("uint16")
    will: number;
    
    @type([Card])
    startThings = new ArraySchema<Card>();
    
    @type("uint16")
    expansionId: number;
    
    @type("string")
    frontSide: string;
    
    @type("string")
    flipSide: string;
    
    @type("string")
    icon: string;
    
    @type([Card])
    cards = new ArraySchema<Card>();
    
    @type("string")
    owner: string;
    
    @type([Card])
    searchResult = new ArraySchema<Card>();
    
    clon(): Investigator {
        let clone: Investigator = new Investigator();
        clone.id = this.id;
        clone.name = this.name;
        clone.occupation = this.occupation;
        clone.physiologicalIndex = this.physiologicalIndex;
        clone.psychologicalIndex = this.psychologicalIndex;
        clone.lore = this.lore;
        clone.influence = this.influence;
        clone.observation = this.observation;
        clone.strength = this.strength;
        clone.will = this.will;
        clone.startThings = new ArraySchema<Card>();
        clone.expansionId = this.expansionId;
        clone.frontSide = this.frontSide;
        clone.flipSide = this.flipSide;
        clone.icon = this.icon;
        clone.cards = new ArraySchema<Card>();
        clone.owner = this.owner;
        clone.searchResult = new ArraySchema<Card>();
        
        //for(let i in this.cards) {
        //    clone.cards.push(this.cards[i].clone())
       // }
        
        return clone;
    }
    
    isCardExist(title: string): boolean {
        for(let card of this.cards) {
            if(card.title === title) {
                return true;
            }
        }
    }
}