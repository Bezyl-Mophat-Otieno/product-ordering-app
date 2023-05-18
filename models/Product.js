import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
title:{
    type:String,
    maxLength:60

},
desc:{
    type:String,
    maxLength:60

},
prices:{
    type:[Number],

},
image:{
    type:String,
    maxLength:60

},
extraOptions:{
    type:[{option:{type:String,required:true},price:{type:Number,required:true}}],

}

},{timestamps:true})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);