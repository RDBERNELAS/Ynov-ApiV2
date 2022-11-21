import Task from './task-model.js'
import Joi from 'joi'

export async function index (ctx) {
    try{
        ctx.body = await Task.find({})
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function readOne (ctx) {
    try{
        ctx.body = await Task.findById(ctx.params.id)
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function create (ctx) {
    try{
        const taskValidationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required()
        })

        const {error} = exempleValidationSchema.validate(ctx.request.body)
        if (error) throw new Error(error)

        Task.create(ctx.request.body)
        ctx.body = await Task.find({})
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function update (ctx) {
    try{
        console.log('Update')
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function deleteThis (ctx) {
    try{
        ctx.body = await Task.findByIdAndRemove(ctx.params.id)
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}