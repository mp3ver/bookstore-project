import {RegisterAction} from "../actions/registration";
import {SetRole} from "../actions/role";

/**
 * Middleware function
 */
export default function registerMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case RegisterAction:
                fetch("http://localhost:8080/register", {
                method: "POST",    
                headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                body: JSON.stringify(action.payload)
                }).then(    
                    response => {
                        if(response.status!==200){
                            store.dispatch(new SetRole("Пользователь с таким логином уже существует"))
                        }
                        else{
                            store.dispatch(new SetRole("Пользователь успешно зарегистрирован"))
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