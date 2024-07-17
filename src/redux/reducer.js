import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from "./constants";

const intialstate = [];

export const reducer = ( state = intialstate, action) => {
    switch(action.type) { 
        case ADD_TO_CART : 
        return [
                ...state,
                action.data
        ]
        case REMOVE_FROM_CART : 
        let results = state.filter(item => {
            return item.name !=action.data
        })
        return [ ...results  ]
        case SET_USER_DATA : 
        return [
          
                action.data
        ]

        default: 
        return state
    }
}