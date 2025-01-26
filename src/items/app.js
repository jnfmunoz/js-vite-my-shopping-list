import html from './app.html?raw';
import itemStore from '../store/item.store';
import { renderItems } from './use-cases';

const ElementIds = {
    ItemList: '.item-list',
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
}
