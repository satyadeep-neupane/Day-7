const User = require('../models/model.user');

// Get all users
exports.index = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err.message});
    }
}

// Get a specific user
exports.show = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message: err.message});
    }
}

// Create a user
exports.store = async (req, res) => {
    const user = new User({...req.body, isAdmin: true});
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err.message});
    }
}

// Update a user
exports.update = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.password = req.body.password;

        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err.message});
    }
}

// Delete a user
exports.destroy = async (req, res) => {
    console.log(req.params.id);
    try{
        const removedUser = await User.deleteOne({_id: req.params.id});
        res.json(removedUser);
    }catch(err){
        res.json({message: err.message});
    }
}
