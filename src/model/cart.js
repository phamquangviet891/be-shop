const mongoose= require("mongoose");
var uniqueValidator = require("mongoose-unique-validator")
var cartItemSchema = require('./cartItem').schema
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    test:{
        type:String,
        default:"test"
    },
    
});


cartSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Cart",cartSchema);