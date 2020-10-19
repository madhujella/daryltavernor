const Company = require('../models/company');

exports.getCompany = async (req, res, next) => {
    try {
        res.status(200)
        const data = req.params.company_id ? await Company.findCompany(req.params.company_id) : await Company.findCompanies({})
        res.json(data)
        next()
    } catch (e) {
        console.log(e)
        res.json(JSON.stringify(e))
    }
}

exports.addCompany = async (req, res, next) => {
    try {
        res.status(201)
        const data = await Company.addCompany(req.body)
        res.json(data)
        next()
    } catch (e) {
        console.log(e)
        res.json(JSON.stringify(e))
    }
}

exports.updateCompany = async (req, res, next) => {
    try {
        res.status(201)
        const data = await Company.updateCompany(req.params.company_id, req.body)
        res.json(data)
        next()
    } catch (e) {
        console.log(e)
        res.json(JSON.stringify(e))
    }
}

exports.deleteCompany = async (req, res, next) => {
    try {
        res.status(200)
        const data = await Company.deleteCompany(req.params.company_id)
        res.json(data)
        next()
    } catch (e) {
        console.log(e)
        res.json(JSON.stringify(e))
    }
}
