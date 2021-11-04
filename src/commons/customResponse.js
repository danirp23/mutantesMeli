let getDate = () => {
    let date = new Date();
    return date.toJSON();
};
const INTERNAL_ERROR_BODY = {
    code: 400,
    status: {
        code: "MU4001",
        message: "Error in the service, body invalid",
        detail: "",
        date: getDate()
    }
};
const SUCCESS = {
    code: 200,
    status: {
        code: "MU4001",
        message: "Error in the service, body invalid",
        detail: "",
        date: getDate()
    }
};

module.exports = {
    getDate,
    INTERNAL_ERROR_BODY,
    SUCCESS
};