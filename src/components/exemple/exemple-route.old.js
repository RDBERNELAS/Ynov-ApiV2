import Router from '@koa/router'

const exemples = new Router()

const todos = [
    {
        id: 1,
        title: "Vendre mon chien"
    },
    {
        id: 2,
        title: "pousser mémé dans les orties"
    },
    {
        id: 3,
        title: "vidanger mon 'ami'"
    }
]

exemples.get('/', (ctx, next) => {
    ctx.body = todos
})

exemples.get('/:id', (ctx) =>{
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    ctx.body = task
    // ctx.body = todos.findIndex(ctx.params.id)
})

exemples.post('/', (ctx) =>{

    const newTask = {
        id: todos.length + 1,
        title: ctx.request.body.title
    }
    todos.push(newTask)
    ctx.body = todos
})

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