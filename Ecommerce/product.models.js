import mongoose, { mongo } from "mongoose";

const productSchema=new mongoose.Schema({

    description:{

        type:String,
        required:true,

    },

    name:{
        
        type:String,
        required:true,


    },


    productimage:{
        type:String,

        //ALWAYS KEEP IN MIND ,DONT DIRECTLY UPLOAD IMAGES AND LARGE FILES ON DB,KEEP THEM I,N UR SERVER OR ANY THIRD PARTY  AND PROVIDE ITS PUBLIC URL INTPRDUCT IMAGE
        
    
    },
    price:{

        type:Number,
        default:0,
        


    },
    stock:{
        type:Number,
        default:0,
    },
    catogery:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"Catogery",
        required:true,
    
    
    
    },

    owner:{


        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    }





},{timestamps:true})


export const product = mongoose.model("product")