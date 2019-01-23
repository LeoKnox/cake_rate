const controller = require("./controller");

module.exports = function(app) {
    app.get('/cake', controller.index);
    app.post('/cake', controller.bake);
    app.patch('/cake/:id', controller.rate)
}