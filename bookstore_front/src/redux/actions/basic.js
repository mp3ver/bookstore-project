import BaseAction from "../helpers/BaseAction";

export const SetBasicAction = "SetBasicAction";

export class SetBasic extends BaseAction {
    constructor(payload) {
        super(SetBasicAction, payload);
    }
}