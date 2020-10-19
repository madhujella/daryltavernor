const mongoose = require('mongoose');

exports.dbConnect = async (req, res, next) => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/company', { useNewUrlParser: true, useUnifiedTopology: true })
        next()
    } catch (e) {
        res.json(e)
    }
}