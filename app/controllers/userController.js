const User = require('../models/model.user');

// Get all users
exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err.message});
    }
}

// Get a specific user
exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message: err.message});
    }
}

// Create a user
exports.createUser = async (req, res) => {
    const user = new User(req.body);
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err.message});
    }
}

// Update a user
exports.updateUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.isAdmin = req.body.isAdmin;
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err.message});
    }
}

// Delete a user
exports.deleteUser = async (req, res) => {
    try{
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);
    }catch(err){
        res.json({message: err.message});
    }
}
