import {combineReducers} from 'redux';

// import partial reducers
import books from "./books";
import authors from "./authors";
import basket from "./basket";
import orders from "./orders";
import role from "./role";
import basic from "./basic";

/**
 * Combine and return all reducers to store
 */
export default combineReducers({
    // list of reducers
    books,
    authors,
    basket,
    orders,
    role,
    basic,

});