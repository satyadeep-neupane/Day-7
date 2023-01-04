const Category = require('../models/model.category');

exports.store = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json(category);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.index = async (req, res) => {
    try {
        const categorys = await Category.find();
        res.json(categorys);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.destroy = async(req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json(category);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.update = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
                                    req.params.id,
                                    req.body, 
                                    {new: true}
                                );
        
        res.json(category);
    }catch(err)
    {
        res.json({message: err.message});
    }
}

