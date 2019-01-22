var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake_api', (err)=>{
    console.log("connected db");
    if (err) {
        console.log(err);
    }
});

var CakeSchema = new mongoose.Schema({
    baker: {type:String},
    stars: [Number],
    comments: [String]
}, {timestamps: true})

module.exports = mongoose.model('Cakes', CakeSchema);