import { Item  } from '../items/models/item.models';

const list = {
    items:[
        new Item('Apple'),
        new Item('Banana'),
        new Item('Cherry'),
    ]
};

const initStore = () => {
    console.log('Init Store 🦎');
    // loadStore();
};

const getItems = () => {
    return list.items;
};

/**
 * 
 * @param {String} description 
 */
const addItem = (description) => {
    if(!description) throw new Error('Description is required');
    list.items.push(new Item(description));
    
};

const deleteItem = (itemId) => {
    list.items = list.items.filter(item => item.id !== itemId);
}

export default{
    addItem,
    deleteItem,
    getItems,
    initStore,
};