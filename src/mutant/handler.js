let {
    INTERNAL_ERROR_BODY,
} = require('../commons/customResponse');

const Controller = require('./controller').Controller;


/**
 * Handler for isMutant
 * @param {*} event
 * @param {*} context
 */
async function Handler(event, context) {
    let controller = new Controller();
    controller.getMutans(event, context);
    try {
        if (!event.body || !event.body.dna)
            throw INTERNAL_ERROR_BODY;

    } catch (error) {
        console.error("Error: ", error);
        return error;
    }

    console.log("event: ", event);
    return "Holi mutante";
}

module.exports.Handler = Handler;
