import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import reducers from "./reducers/reducers"

import booksMiddleware from "./middleware/books"
import authorsMiddleware from "./middleware/authors"
import orderMiddleWare from "./middleware/orders"
import authMiddleware from "./middleware/auth"
import registerMiddleware from "./middleware/registration"

/**
 * To initialize the store
 * @returns {Store<unknown, AnyAction> & Store<S, A> & {dispatch: Dispatch<A>}}
 */
export default function configureStore() {
    // define middleware
    const logger = createLogger();

    // create middleware
    const middleware = applyMiddleware(...[
        thunk,
        booksMiddleware(),
        authorsMiddleware(),
        orderMiddleWare(),
        authMiddleware(),
        registerMiddleware(),
    ]);

    // create a new store and return it
    var store = createStore(reducers, {},  middleware);

    // store.dispatch();
    return store;
}