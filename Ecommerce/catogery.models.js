import mongoose  from "mongoose";
const catogerySchema=new mongoose.Schema({


    name:{
        type:String,
        required:true,

    },


},{timestamps:true})


export const Catogery=mongoose.model("Catogery",catogerySchema)