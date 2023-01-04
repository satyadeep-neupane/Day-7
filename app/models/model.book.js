const mongoose = require('mongoose');
const Category = require('../models/model.category')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    image: {
        type: [String],
        required: false,
    }
});

bookSchema.pre('save', async function(next){
    const category = await Category.findById(this.category);
    if(!category) return next(new Error('Category not found'));
    this.category = category.name
    next();
})


module.exports = mongoose.model('Book', bookSchema);