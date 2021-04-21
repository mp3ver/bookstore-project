import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetBasketAction = "GetBasketAction";
export const SetBasketAction = "SetBasketAction";

/**
 * GetAuthors action class
 */
export class GetBasket extends BaseAction {
    constructor(payload = {}) {
        super(GetBasketAction, payload);
    }
}

/**
 * SetAuthors action class
 */
export class SetBasket extends BaseAction {
    constructor(payload) {
        super(SetBasketAction, payload);
    }
}