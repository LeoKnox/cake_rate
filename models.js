var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake_api', (err)=>{
    console.log("connected db");
    if (err) {
        console.log(err);
    }
});

const RatingSchema = new mongoose.Schema({
    // rating schema
    stars: [Number],
    comments: [String]
})
var CakeSchema = new mongoose.Schema({
    baker: {type:String, minlength:[3,"More than 3 characters"]},
    url: {type:String, required:[true,"Please link image"]},
    ratings: [RatingSchema]
}, {timestamps: true})

module.exports = mongoose.model('Cakes', CakeSchema);