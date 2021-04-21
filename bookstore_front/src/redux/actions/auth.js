import BaseAction from "../helpers/BaseAction";

export const DoAuthAction = "DoAuthAction";

export class DoAuth extends BaseAction {
    constructor(payload) {
        super(DoAuthAction, payload);
    }
}