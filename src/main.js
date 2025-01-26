import './style.css';
import { App } from './items/app';
import itemStore from './store/item.store';

itemStore.initStore();

App('#app');
