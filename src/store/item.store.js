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
    loadStore();
};

const loadStore = () => {
    // Load data from local storage here.
    if(!localStorage.getItem('list')) return;

    // console.log(JSON.parse(localStorage.getItem('list')));
    const {items = []} = JSON.parse(localStorage.getItem('list'));
    list.items = items;
};

const saveStateToLocalStorage = () => {
    // Save data to local storage here.
    // console.log(JSON.stringify(list));
    localStorage.setItem('list', JSON.stringify(list));
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
    saveStateToLocalStorage();

};

const deleteItem = (itemId) => {
    list.items = list.items.filter(item => item.id !== itemId);
    saveStateToLocalStorage();

}

export default{
    addItem,
    deleteItem,
    getItems,
    initStore,
};