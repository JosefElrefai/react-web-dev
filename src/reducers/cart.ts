import { ActionTypes, Action } from '../actions/actionTypes';
import { CartObject } from '../interfaces';

const cart = (state: CartObject[] = [], action: Action) => {
    switch(action.type){
        case ActionTypes.addToCart:
            const i = state.findIndex(obj => obj.id === action.payload.id);
            if(i === -1) return [...state, action.payload];
            else{
                const oldQuantity = state[i].quantity;
                const newQuantity = oldQuantity + action.payload.quantity;
                const newState = [...state];
                newState.splice(i, 1, {
                    ...state[i],
                    quantity: newQuantity
                });
                return newState;
            }
        default:
            return state;
    }
}

export default cart;