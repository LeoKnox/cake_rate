const Cake = require("./models");

module.exports = {
    index: function(req, res) {
        console.log('first route');
        Cake.find({})
            .then(results =>{
                console.log('collecting');
                res.json(results);
            })
            .catch(err=>{
                console.log(err);
            })
    }
}