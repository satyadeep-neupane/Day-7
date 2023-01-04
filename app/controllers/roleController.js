const Role = require('../models/model.role');

exports.store = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.json(role);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.index = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.destroy = async (req, res) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id);
        res.json(role);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.update = async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(
                                    req.params.id,
                                    req.body, 
                                    {new: true}
                                );
        
        res.json(role);
    }catch(err)
    {
        res.json({message: err.message});
    }
}

