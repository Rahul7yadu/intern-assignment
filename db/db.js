const mongoose = require('mongoose')

const url = "mongodb+srv://newsletter:ADZeg06qJj1pRWfN@newslater.ebxzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const connectDb = async ()=>{
    try{
            await mongoose.connect(url);

            console.log("db connected")
    }catch(e){
            console.log(e.message)
            process.exit(1)
    }
}

module.exports = connectDb;