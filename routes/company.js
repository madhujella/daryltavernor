const { celebrate, Segments, Joi } = require('celebrate');
const express = require('express');

const { addCompany, deleteCompany, getCompany, updateCompany } = require('../controllers/company');

const { Router } = express;

const companyRouter = Router();

const validations = {
    get: {
        [Segments.PARAMS]: {
            company_id: Joi.number().optional()
        }
    },
    post: {
        [Segments.BODY]: {
            name: Joi.string().required(),
            status: Joi.string().valid('active', 'inactive').optional(),
            affiliate: Joi.boolean().optional()
        }
    },
    put: {
        [Segments.PARAMS]: {
            company_id: Joi.number().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            status: Joi.string().valid('active', 'inactive').optional(),
            affiliate: Joi.boolean().optional()
        }
    },
    delete: {
        [Segments.PARAMS]: {
            company_id: Joi.number().required()
        }
    }
}

companyRouter
    .route('/company')
    .get(celebrate(validations.get), getCompany)
    .post(celebrate(validations.post), addCompany)

companyRouter
    .route('/company/:company_id')
    .get(celebrate(validations.get), getCompany)
    .put(celebrate(validations.put), updateCompany)
    .delete(celebrate(validations.delete), deleteCompany)

module.exports = companyRouter;



