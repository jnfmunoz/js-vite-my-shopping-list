import { Item } from "../models/item.models";


/**
 * 
 * @param {Item} item 
 */
export const createItemHtml = (item) => {
    if(!item) throw new Error('A Item object is required');

    const {description, id} = item;

    const html = `
            <span>${description}</span>
            <button>Delete</button>
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    return liElement;
}