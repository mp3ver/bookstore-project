import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetOrdersAction = "GetOrdersAction";
export const GetCustomerOrdersAction = "GetCustomerOrdersAction";
export const SetOrdersAction = "SetOrdersAction";

/**
 * GetAuthors action class
 */
export class GetCustomerOrders extends BaseAction {
    constructor(payload = {}) {
        super(GetCustomerOrdersAction, payload);
    }
}

export class GetOrders extends BaseAction {
    constructor(payload = {}) {
        super(GetOrdersAction, payload);
    }
}

/**
 * SetAuthors action class
 */
export class SetOrders extends BaseAction {
    constructor(payload) {
        super(SetOrdersAction, payload);
    }
}