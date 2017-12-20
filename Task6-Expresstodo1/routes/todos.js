const route = require('express').Router()
let todos = [{
        task: "task1",
        done: "yes"
    },
    {
        task: "task2",
        done: "no"
    },
    {
        task: "task3",
        done: "yes"
    },
    {
        task: "task4",
        done: "no"
    }
]

route.get('/', (req, res) => res.send(todos))
route.post('/', (req, res) => {
    todos.push({
        task: req.body.task,
        done: req.body.done
    })
    res.send(todos)
})

route.patch('/', (req, res) => {
    let Utask = req.body.task
    // console.log(Utask);
    let Udone = req.body.done
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].task === Utask) {
            todos[i].done = Udone;
            break;
        }
    }
    res.send(todos)
})

route.get('/:id', (req, res) => res.send(todos[req.params.id]))

route.delete('/:id', (req, res) => {
    let nid = Number(req.params.id);// converting param id to number
    console.log(nid)
    if (nid >= todos.length) {
        // not possible

    } else if (nid == todos.length - 1) {
        todos.pop();
    } else {
        for (let i = nid; i < todos.length - 1; i++) {
            todos[i].task = todos[i + 1].task;
            todos[i].done = todos[i + 1].done;
        }

        todos.pop();
    }
    res.send(todos)


})

module.exports = route