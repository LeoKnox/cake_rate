const Cake = require("./models");

module.exports = {
    index: function(req, res) {
        console.log('first route');
        Cake.find({})
            .then(results =>{
                console.log('collecting' + results);
                res.json(results);
            })
            .catch(err=>{
                console.log(err);
            })
    },

    bake: function(req, res) {
        Cake.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },

    rate: function(req, res) {
        console.log(req.params.id + " " + req.body)
        Cake.findByIdAndUpdate(req.params.id, {$push:{ratings:req.body}})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}