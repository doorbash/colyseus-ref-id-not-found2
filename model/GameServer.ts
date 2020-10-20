import {Schema, type, ArraySchema, MapSchema} from "@colyseus/schema"
import {Room, Client} from "colyseus"
import {User} from './User';
import {Message} from './Message';
import {CardType} from './CardType';
import {Expansion} from './Expansion';
import {StartThing} from './StartThing';
import {Investigator} from './Investigator';
import {Card} from './Card';
import {ServerMessage} from './ServerMessage';
import {MyState} from './MyState';

//let room: Room;

export class GameRoom extends Room {
    maxClients: number = 8;
    autoDispose: boolean = false;
    password: string;
    ownerId: string;

    onCreate?(options: any): void {
            console.log("Room created!", options);
            this.password = options.password;
            this.ownerId = options.userId;

            this.setState(new MyState());
            
            this.onMessage("addCard", (client, message) => {
                console.log("ADD CARD");
                addCards(this);
                addInv(this);
                
            });

            this.onMessage("shuffle", (client, message) => {
            
                console.log("SHUFFLE");
                    shuffle(this.state.assetsDeck);

            });
            
            this.onMessage("inv", (client, message) => {
                console.log("INV");
                //this.state.selectedInvestigators[0].influence = 10;
                inv(this);
                
            });
    
    }

    onJoin?(client: Client, options?: any, auth?: any): void | Promise<any> {

            console.log('onJoin(', client.id, ')', options);

    }

    onLeave?(client: Client, consented?: boolean): void | Promise<any> {
        console.log("onLeave(" + client.sessionId + ")");
    }

    onDispose?(): void | Promise<any> {
        console.log("Dispose Room");
    }
}

function addCards(room: Room):void {
room.state.assetsDeck.push(new Card(1, 1, "Card title", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
                room.state.assetsDeck.push(new Card(2, 1, "Card title", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
                room.state.assetsDeck.push(new Card(3, 1, "Card title", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
                room.state.assetsDeck.push(new Card(4, 1, "Card title", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
                                    
}

function removeCards(room: Room): void {
room.state.assetsDeck.splice(0, 1);
room.state.assetsDeck.splice(0, 1);
}

function addInv(room: Room) {
    let inv1: Investigator = new Investigator();

    inv1.id = 1;
    inv1.name = "Akachi";
    inv1.occupation = "Sham";
    inv1.physiologicalIndex = 5;
    inv1.psychologicalIndex = 5;
    inv1.lore = 5;
    inv1.influence = 5;
    inv1.observation = 5;
    inv1.strength = 5;
    inv1.will = 5;
    inv1.startThings = new ArraySchema<Card>();
    inv1.expansionId = 1;
    inv1.frontSide = "front";
    inv1.flipSide = "flip";
    inv1.icon = "icon";
    inv1.cards = new ArraySchema<Card>();
    inv1.owner = "owner";
    inv1.searchResult = new ArraySchema<Card>();
                
                
                let inv: Investigator = new Investigator();

    inv.id = 2;
    inv.name = "Leo";
    inv.occupation = "Leader";
    inv.physiologicalIndex = 5;
    inv.psychologicalIndex = 5;
    inv.lore = 5;
    inv.influence = 5;
    inv.observation = 5;
    inv.strength = 5;
    inv.will = 5;
    inv.startThings = new ArraySchema<Card>();
    inv.expansionId = 1;
    inv.frontSide = "front";
    inv.flipSide = "flip";
    inv.icon = "icon";
    inv.cards = new ArraySchema<Card>();
    inv.owner = "owner";
    inv.searchResult = new ArraySchema<Card>();
    
    room.state.selectedInvestigators.push(inv1);
    room.state.selectedInvestigators.push(inv);
}

function inv(room: Room) {
    room.state.assetsDeck[0].title = "TITLE";
    room.state.selectedInvestigators[0].influence = 10;
    room.state.selectedInvestigators[0].cards.push(new Card(1, 1, "Card title", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
    room.state.selectedInvestigators[0].cards.push(new Card(2, 1, "Card title2", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
    room.state.selectedInvestigators[0].cards.push(new Card(3, 1, "Card title3", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
                                    
    setTimeout(() => {
        room.state.selectedInvestigators[0].cards.splice(0, 1);
        shuffle(room.state.selectedInvestigators[0].cards);
    }, 2000);
    
    setTimeout(() => {
        room.state.selectedInvestigators[0].cards.push(new Card(1, 1, "Card title1", new ArraySchema<CardType>(), 1,
                                    false, 1, "front side img", "flip side image"));
        shuffle(room.state.selectedInvestigators[0].cards);
    }, 4000);
    
    //setTimeout(() => {
        //shuffle(room.state.selectedInvestigators[0].cards);
    //}, 6000);
    
    //setTimeout(() => {
      //  room.state.selectedInvestigators[0].cards.push(new Card(2, 2, "Card title2", new ArraySchema<CardType>(), 1,
        //                            false, 1, "front side img", "flip side image"));
    //}, 8000);
}

function shuffle(temp: ArraySchema<Card>): void {
    for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
}