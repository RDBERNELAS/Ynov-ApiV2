import Exemple from "./exemple-model.js"
import Joi from 'joi'

export async function index (ctx) {
    try{
        ctx.body = await Exemple.find({})
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function readOne (ctx) {
    try {
        ctx.body = await Exemple.findById(ctx.params.id)
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function create (ctx) {
    try {
        const exempleValidationSchema = Joi.object({
            name : Joi.string().required(),
            description : Joi.string(),
            color: Joi.array().has(Joi.string()),
            price: Joi.number().required()
        })

        const { error } = exempleValidationSchema.validate(ctx.request.body)
        if (error) throw new Error(error)

        Exemple.create(ctx.request.body)
        ctx.body = await Exemple.find({})
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function update (ctx) {
    try {
        // Il faut prendre prendre les parametres de la requêtes (l'id et les modifs)
        // Il faut vérifier si on peut trouver la tache avec l'id FindByID (Sécurité)
        // Il faut créer un modèle d'Exemple avec les modifs passé dans la requête afin de l'utiliser dans le FindByIdAndUpdate (Pas sur ?)
        // Il faut utiliser FindByIdAndUpdate
        // Exemple.findByIdAndUpdate()
        console.log("TestUpdate")

    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}

export async function deleteThis (ctx) {
    try {
        // Exemple.findOneAndDelete({ _id: ctx.params.id})
        // ctx.body = await Exemple.find({})
        ctx.body = await Exemple.findByIdAndRemove(ctx.params.id)
    } catch (e) {
        ctx.badRequest({message:e.message})
    }
}