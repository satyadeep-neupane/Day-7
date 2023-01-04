const mongoose = require('mongoose');
const hasher = require('../helpers/hasher');

// user schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        lowercase: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
        immutable: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
}, {timestamps: true});

// hash password before saving
userSchema.pre('save', async function(next){
    const user = this;
    
    if(user.isModified('password')){
        user.password = await hasher(user.password);
    }
    next();
});

// user model
module.exports = mongoose.model('User', userSchema);