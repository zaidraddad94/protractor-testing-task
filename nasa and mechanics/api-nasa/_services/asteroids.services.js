var axios = require("axios");
/**
 * api call using axios will return object with details about the astroid 
 * @param {asteroid id} id 
 * @returns {asteroid data}
 */
function getAsteroidDetailsById(id) {
    return axios.get(`http://www.neowsapp.com/rest/v1/neo/${id}?api_key=DEMO_KEY`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error;
        });
};

module.exports = {
    getAsteroidDetailsById,
};
