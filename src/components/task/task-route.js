import Router from "@koa/router";
// import * as TaskControllers from '#components/exemple/task-controllers.js'

const tasks = new Router()

tasks.get('/', TaskControllers.index)
tasks.get('/:id', TaskControllers.readOne)
tasks.post('/', TaskControllers.create)
tasks.put('/:id', TaskControllers.update)
tasks.del('/:id', TaskControllers.deleteThis)

export default tasks