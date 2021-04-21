class BaseAction {
    constructor(type, payload = {}) {
        this.payload = payload;
        this.type = type;
    }
}

export default BaseAction;