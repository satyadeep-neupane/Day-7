const Author = require('../models/model.author');

exports.store = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.json(author);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.index = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.destroy = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        res.json(author);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.update = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(
                                    req.params.id,
                                    req.body, 
                                    {new: true}
                                );
        
        res.json(author);
    }catch(err)
    {
        res.json({message: err.message});
    }
}

