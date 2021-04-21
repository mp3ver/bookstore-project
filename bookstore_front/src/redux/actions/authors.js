import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetAuthorsAction = "GetAuthorsAction";
export const SetAuthorsAction = "SetAuthorsAction";

/**
 * GetAuthors action class
 */
export class GetAuthors extends BaseAction {
    constructor(payload = {}) {
        super(GetAuthorsAction, payload);
    }
}

/**
 * SetAuthors action class
 */
export class SetAuthors extends BaseAction {
    constructor(payload) {
        super(SetAuthorsAction, payload);
    }
}