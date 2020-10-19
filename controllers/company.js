const Company = require('../models/company');
const company = new Company()

const getCompanies = async () => {
    const data = await company.find({})
    console.log(data)
}

const getCompany = async (company_id) => {
    const data = await company.findOne(company_id)
    console.log(data)
}

const addCompany = async (company) => {
    const data = await company.save(company)
    console.log(data)
}

const updateCompany = async (company_id, update) => {
    const data = await company.updateOne(company_id, update)
    console.log(data)
}

const deleteCompany = async (company_id) => {
    const data = await company.deleteOne(company_id)
    console.log(data)
}

module.exports = {
    getCompanies,
    getCompany,
    addCompany,
    updateCompany,
    deleteCompany,
}