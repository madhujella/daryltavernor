const mongoose = require('mongoose');

const company_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    affiliate: {
        type: Boolean,
        default: false
    }
});

const company = mongoose.model('company', company_schema);

module.exports = company;