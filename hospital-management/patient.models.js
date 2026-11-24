import mongoose from "mongoose";

const patientSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    diagnosedwith:{

        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },


    age:{
        type:Number,
        required:true,

    },
    gender:{
        type:String,
        enum:["MALE","FEMALE","OTHERS"],
        required:true,
    },


    admitin:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital",
    },

},{timestamps:true});
export const patient=mongoose.model('patient',patientSchema);

