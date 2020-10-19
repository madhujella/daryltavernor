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

const Company = mongoose.model('Company', company_schema);

module.exports = Company;