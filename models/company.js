const mongoose = require('mongoose');
const { addCompany, deleteCompany } = require('../controllers/company');

const CompanySchema = new mongoose.Schema({
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

CompanySchema.static({
    async findCompanies() {
        return await this.find({})
    },
    async findCompany(id) {
        return await this.findById(id)
    },
    async addCompany(company) {
        return await this.create(company)
    },
    async updateCompany(id, updated) {
        return await this.findOneAndUpdate(id, updated, { new: true })
    },
    async deleteCompany(id) {
        return await this.findOneAndDelete(id)
    },
})

const Company = mongoose.model('Company', CompanySchema);


module.exports = Company;