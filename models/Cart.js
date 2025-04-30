const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
      title:{type:String, required:true,unique:true},
      des:{type:String,required:true},
      price:{type:Number,required:true},

    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema)