const { Service } = require('./service');

let {
    SUCCESS,
} = require('../commons/customResponse');

class Controller {

    /**
     * Initialize global objects
     */
    constructor() {
        this.service = new Service();
    }

    async initialize() {
        await this.service.initialize();
    }

    /**
     * Retrives Location
     * @param {*} event
     * @param {*} context
     */
    async getMutans(event, context) {
        let response = {};
        let status = {};
        try {
            this.service.getMutans(event, context);
            console.debug("Success", response);
        } catch (error) {
            console.error("Error:", response);
        }
        return response;
    }
}

module.exports.Controller = Controller;
