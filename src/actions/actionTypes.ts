import { AddToCartAction, RemoveFromCartAction } from './index';

export enum ActionTypes {
    addToCart,
    removeFromCart
}

export type Action = AddToCartAction | RemoveFromCartAction;