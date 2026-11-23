import mongoose from "mongoose";
import { product } from "./product.models";


const orderitemSchema=new mongoose.Schema({

    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },

    quantity:{
        type:Number,
        required:true,
    },


})


const orderSchema=new mongoose.Schema({
    orderPrice:{

        type:Number,
        required:true

    },
    cusotmer :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    orderitems:{
        type:[orderitemSchema]
    
    
    },
    address:{
        type:String,
        required:true
    },

    //enum give choices 

    status:{

        type:String,
        enum:["PENDING","CANCELLED","DELIEVERED"],
        default:"PENDING",
    },




},{timestamp:true})

export const order=mongoose.model("order",orderSchema)