const Company = require('../models/company');
const company = new Company()

const { save, find, findOne, updateOne, deleteOne } = company;

exports.getCompany = async (req, res, next) => {
    res.status(200)
    const data = req.params.company_id ? await findOne(req.params.company_id) : await find({})
    res.json(data)
    next()
}

exports.addCompany = async (req, res, next) => {
    res.status(201)
    const data = await save(req.body)
    res.json(data)
    next()
}

exports.updateCompany = async (req, res, next) => {
    res.status(201)
    const data = await updateOne(req.params.company_id, req.body)
    res.json(data)
    next()
}

exports.deleteCompany = async (req, res, next) => {
    res.status(200)
    const data = await deleteOne(req.params.company_id)
    res.json(data)
    next()
}
