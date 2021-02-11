import { CartObject } from '../interfaces';
import { ActionTypes } from "./actionTypes";

export interface AddToCartAction {
    type: ActionTypes.addToCart ;
    payload: CartObject;
}

export const addToCart = (obj: CartObject): AddToCartAction => {
    return {
        type: ActionTypes.addToCart,
        payload: obj
    }
}

//just for testing
export interface RemoveFromCartAction {
    type: ActionTypes.removeFromCart;
    payload: {potato: number };
}

export const removeFromCart = (potato: number): RemoveFromCartAction=> {
    return {
        type: ActionTypes.removeFromCart,
        payload: {potato: potato}
    };
}