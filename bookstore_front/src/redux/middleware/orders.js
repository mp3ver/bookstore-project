import {GetOrdersAction, GetCustomerOrdersAction, SetOrders} from "../actions/orders";

/**
 * Middleware function
 */
export default function ordersMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetOrdersAction:
                let basicString = store.getState().basic.basic;
                fetch("http://localhost:8080/orders", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + basicString
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetOrders(response))
                )
                break;
            case GetCustomerOrdersAction:
                let aletrBasicString = store.getState().basic.basic;
                fetch(`http://localhost:8080/orders/${aletrBasicString}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + aletrBasicString
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetOrders(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}