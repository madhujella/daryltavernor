const mongoose = require('mongoose');

exports.dbConnect = async (req, res, next) => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/company', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(db)
        next()
    } catch (e) {
        console.log(e)
        res.json(e)
    }
}