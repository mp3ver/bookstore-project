import {SetBasicAction} from "../actions/basic";

const initialState = {
    basic: ''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SetBasicAction: return {
            ...state,
            basic: action.payload
        }
        default:
            return state;
    }
}