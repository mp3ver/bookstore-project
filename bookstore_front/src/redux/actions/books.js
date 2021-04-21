import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetBooksAction = "GetBooksAction";
export const SetBooksAction = "SetBooksAction";

/**
 * GetBooks action class
 */
export class GetBooks extends BaseAction {
    constructor(payload = {}) {
        super(GetBooksAction, payload);
    }
}

/**
 * SetBooks action class
 */
export class SetBooks extends BaseAction {
    constructor(payload) {
        super(SetBooksAction, payload);
    }
}