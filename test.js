let todos=[
    {task:"task1",done:"yes"},
    {task:"task2",done:"no"},
    {task:"task3",done:"yes"},
    {task:"task4",done:"no"}
]
todos[0].task="changed"
console.log(todos[0].task=="changed")
console.log(todos[0].task);
console.log(todos)