import { combineReducers } from 'redux'; 
import { CartObject } from '../interfaces';
import cart from './cart';


export interface Store{
    cart: CartObject[];
}

export const reducers = combineReducers<Store>({
    cart: cart
});