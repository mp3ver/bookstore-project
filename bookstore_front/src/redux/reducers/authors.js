import {SetAuthorsAction} from "../actions/authors";

/**
 * initial state of the authors list
 * @type {{authors: []}}
 */
const initialState = {
    authors: []
}

/**
 * The reducer function
 * @param state
 * @param action
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SetAuthorsAction: return {
            ...state,
            authors: action.payload
        }
        default:
            return state;
    }
}


