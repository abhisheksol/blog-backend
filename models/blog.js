const mongoose = require('mongoose');

const schema=mongoose.Schema;

const Blog_Schema=new schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    visit:{
        type:String,
    },
    yt:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now // default value is current date/time
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }
})

module.exports=mongoose.model("Blog",Blog_Schema)