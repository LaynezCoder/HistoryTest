const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    age: {
        type: Number,
        required: [true, 'The age is required']
    }
});

module.exports = model('User', UserSchema);