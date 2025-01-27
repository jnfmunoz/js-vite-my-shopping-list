import { Item } from "../models/item.models";
import { createItemHtml } from './create-item-html'

let element; 

/**
 * 
 * @param {String} elementId
 * @param {Item} items
 */
export const renderItems = (elementId, items=[])=>{

    if(!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`${elementId} not found`);

    element.innerHTML = '';

    items.forEach(item => {
        element.append(createItemHtml(item));
    });

}
