import {DoAuthAction} from "../actions/auth";
import {SetRole} from "../actions/role";
import {SetBasic} from "../actions/basic";

/**
 * Middleware function
 */
export default function authMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case DoAuthAction:
                fetch("http://localhost:8080/auth", {
                method: "POST",    
                headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                body: JSON.stringify(action.payload)
                }).then(                    
                    response => response.json()
                )
                .then(
                    response => {
                        //alert(response.role)
                        store.dispatch(new SetRole(response.role));
                        if(response.role==="CUSTOMER" || response.role==="ADMIN"){
                            let basicString = btoa(response.login + ':' + response.password);
                            store.dispatch(new SetBasic(basicString));
                        }
                    }
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}