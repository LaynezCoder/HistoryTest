const { Schema, model } = require('mongoose');
const mongooseHistory = require('mongoose-history')

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
    },
    updatedFor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'The user is required']
    }
});

const options = { customCollectionName: "ProductHistorySchema" }
Post.plugin(mongooseHistory, options);

module.exports = model('Product', ProductSchema);