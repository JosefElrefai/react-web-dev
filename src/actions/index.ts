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