import Koa from 'koa'
import Router from '@koa/router'
import { cp } from 'fs'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

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

router.get('/todos', (ctx, next) => {
    ctx.body = todos
})

router.get('/todos/:id', (ctx) =>{
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    ctx.body = task
    // ctx.body = todos.findIndex(ctx.params.id)
})

router.post('/todos', (ctx) =>{

    const newTask = {
        id: todos.length + 1,
        title: ctx.request.body.title
    }
    todos.push(newTask)
    ctx.body = todos
})

router.put('/todos/:id', (ctx, next) =>{
    console.log(ctx.request)
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    task.title = ctx.request.body.title
    ctx.body = todos
})

router.delete('/todos/:id', (ctx, next)=>{
    todos.splice(ctx.params.id-1, 1)
    ctx.body = todos
})


app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())
.listen(process.env.PORT, () => console.log(`server listening to port: ${process.env.PORT}`))
