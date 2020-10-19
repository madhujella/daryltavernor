const mongoose = require('mongoose');

module.exports = async (req, res, next) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/company')
        next()
    } catch (e) {
        res.end(e)
    }
}