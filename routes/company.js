const { celebrate, Segments, Joi } = require('celebrate');
const express = require('express');
const { Joi, celebrate, Segments } = require('celebrate');

const { addCompany, deleteCompany, getCompanies, getCompany, updateCompany } = require('../controllers/company');

const { Router } = express;

module.exports = Router('/company')
    .get('/:company_id', celebrate({
        [Segments.PARAMS]: {
            company_id: Joi.number()
        }
    }), async (req, res, next) => {
        res.status(200)
        const data = req.params.company_id ? await getCompany(req.params.company_id) : await getCompanies()
        res.json(data)
        next()
    })
    .post('/', celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            status: Joi.string().allow(['active', 'inactive']),
            affiliate: Joi.boolean()
        }
    }), async (req, res, next) => {
        res.status(201)
        const data = await addCompany(req.body)
        res.json(data)
        next()
    })
    .put('/:company_id', celebrate({
        [Segments.PARAMS]: {
            company_id: Joi.number().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            status: Joi.string().allow(['active', 'inactive']),
            affiliate: Joi.boolean()
        }
    }), async (req, res, next) => {
        res.status(201)
        const data = await updateCompany(req.params.company_id, req.body)
        res.json(data)
        next()
    })
    .delete('/:company_id', celebrate({
        [Segments.PARAMS]: {
            company_id: Joi.number().required()
        }
    }), async (req, res, next) => {
        res.status(200)
        const data = await deleteCompany(req.params.company_id)
        res.json(data)
        next()
    })
