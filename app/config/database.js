const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
module.exports = async function(url){
    try{
        await mongoose.connect(url);
        console.log('Connected to database');
    }catch(err)
    {
        console.log(err.message);
    }
}