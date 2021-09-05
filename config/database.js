const mongoose = require('mongoose');

const connection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/HistoryTest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Database online');
        })
    } catch (error) {
        throw new Error('Error in the database');
    }
}

module.exports = {
    connection
}