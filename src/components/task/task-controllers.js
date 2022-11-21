import Task from './task-model.js'
import Joi from 'joi'

export async function index (ctx) {
    try{
        console.log('index')
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function readOne (ctx) {
    try{
        console.log('readOne')
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function create (ctx) {
    try{
        console.log('Create')
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
        console.log('Delete')
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}