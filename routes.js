const controller = require("./controller");

module.exports = function(app) {
    app.get('/cake', controller.index);
}