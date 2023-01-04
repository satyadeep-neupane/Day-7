const Book = require('../models/model.book');

exports.store = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.index = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name');
        res.json(books);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.destroy = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.update = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
                                    req.params.id,
                                    req.body, 
                                    {new: true}
                                );
        
        res.json(book);
    }catch(err)
    {
        res.json({message: err.message});
    }
}

