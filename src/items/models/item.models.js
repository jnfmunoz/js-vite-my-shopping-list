import {v4 as uuid} from 'uuid';

export class Item{
    constructor(description){
        this.id = uuid();
        this.description = description;
    }
}