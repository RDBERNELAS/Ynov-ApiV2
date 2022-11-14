import Exemple from "./exemple-model.js"
import Joi from 'joi'

export async function index (ctx) {
    try{
        ctx.body = await Exemple.find({})
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function create (ctx) {
    try {
        const exempleValidationSchema = Joi.object({
            name : Joi.string().required(),
            description : Joi.string(),
            colors: Joi.array().has(Joi.string()),
            price: Joi.number().required()
        })
        // const objTest = { name: 'test', value: 123}
        // const arrTest = ['value1', 'value2']
        // const {name, nested: {color}} = objTest
        // const [val1] = arrTest

        const { error } = exempleValidationSchema.validate(ctx.request.body)
        if (error) throw new Error(error)
        ctx.body = await Exemple.find({})
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function readAll () {
    try {

    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function updateThis () {
    try {

    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function deleteThis (ctx) {
    try {

    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}