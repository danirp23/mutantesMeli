/**
 * Handler for isMutant
 * @param {*} event
 */
async function Handler(event, context) {
    console.log("event: ", event);
    return "Holi mutante";
}

module.exports.Handler = Handler;
