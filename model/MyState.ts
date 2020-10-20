import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema"
import { Room, Client } from "colyseus"
import { Investigator } from './Investigator';
import { Card } from './Card';
import { ServerMessage } from './ServerMessage';
import { Message } from './Message';
import { User } from './User';
import { Expansion } from './Expansion';

export class MyState extends Schema {
    @type({ map: User })
    users = new MapSchema<User>();
    
    @type([Message])
    messages = new ArraySchema<Message>();
    
    @type([Expansion])
    expansions = new ArraySchema<Expansion>();
    
    @type([Investigator])
    investigators = new ArraySchema<Investigator>();
    
    @type([ServerMessage])
    serverMessages = new ArraySchema<ServerMessage>();
    
    @type([Card])
    assetsDeck = new ArraySchema<Card>();
    
    @type([Card])
    artifactsDeck = new ArraySchema<Card>();
    
    @type([Card])
    spellsDeck = new ArraySchema<Card>();
    
    @type([Card])
    uniqueAssetsDeck = new ArraySchema<Card>();
    
    @type([Card])
    conditionsDeck = new ArraySchema<Card>();
    
    @type([Investigator])
    selectedInvestigators = new ArraySchema<Investigator>();
    
    @type([Card])
    discardDeck = new ArraySchema<Card>();
    
    @type([Card])
    reserveDeck = new ArraySchema<Card>();
    
    @type([Card])
    boxDeck = new ArraySchema<Card>();
}