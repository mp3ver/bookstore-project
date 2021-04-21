import BaseAction from "../helpers/BaseAction";

export const RegisterAction = "RegisterAction";

export class Register extends BaseAction {
    constructor(payload) {
        super(RegisterAction, payload);
    }
}