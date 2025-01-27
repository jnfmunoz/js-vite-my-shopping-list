import html from './app.html?raw';
import itemStore from '../store/item.store';
import { renderItems } from './use-cases';

const ElementIds = {
    ItemList: '.item-list',
    NewItemInput: '#new-item-input',
    NewItemButton: '#new-item-button',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayItems = () => {
        const items = itemStore.getItems();
        renderItems(ElementIds.ItemList, items)
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        console.log('App component loaded.');
        displayItems();
            
    })();

    // Referencias HTML
    const newItemInput = document.querySelector(ElementIds.NewItemInput);
    const newItemButton = document.querySelector(ElementIds.NewItemButton);
    const itemListUL = document.querySelector(ElementIds.ItemList);

    // Listeners
    newItemInput.addEventListener('keyup', (event) =>{        
        console.log(event.key);
        if(event.key !== 'Enter') return
        if(event.target.value.trim().length === 0) return;

        itemStore.addItem(event.target.value);
        displayItems();
        event.target.value = '';
    });

    newItemButton.addEventListener('click', () => {
        itemStore.addItem(newItemInput.value);
        displayItems();
        newItemInput.value = '';
    });

    itemListUL.addEventListener('click', (event)=>{
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if(!element || !isDestroyElement) return;

        itemStore.deleteItem(element.getAttribute('data-id'));
        displayItems();
    });   
}
