import {GetAuthorsAction, SetAuthors} from "../actions/authors";

/**
 * Middleware function
 */
export default function authorsMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetAuthorsAction:
                let basicString = store.getState().basic.basic;
                fetch("http://localhost:8080/authors", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + basicString
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetAuthors(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}