import Router from "@koa/router";
import * as ExempleControllers from '#components/exemple/exemple-controllers.js'

const exemples = new Router()

exemples.get('/', ExempleControllers.index)

exemples.get('/:id', (ctx)=> {
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    ctx.body = task
})

// exemples.post('/', (ctx) =>{

//     const newTask = {
//         id: todos.length + 1,
//         title: ctx.request.body.title
//     }
//     todos.push(newTask)
//     ctx.body = todos
// })

exemples.post('/', ExempleControllers.create)

exemples.put('/:id', (ctx, next) =>{
    console.log(ctx.request)
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    task.title = ctx.request.body.title
    ctx.body = todos
})

exemples.delete('/:id', (ctx, next)=>{
    todos.splice(ctx.params.id-1, 1)
    ctx.body = todos
})

export default exemples