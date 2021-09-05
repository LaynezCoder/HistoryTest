const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    qty: {
        type: Number,
        required: [true, 'The quantity is required']
    },
    price: {
        type: Number,
        required: [true, 'The price is required']
    }
});

module.exports = model('Product', ProductSchema);