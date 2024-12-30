const mongoose =require("mongoose")

const conn=()=>{
    return mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log("database connected successfully");
        
        
    }).catch((err) => {
        console.log(err);
        
        
    });
}

module.exports=conn