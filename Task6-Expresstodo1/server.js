const express=require('express')

const srv=express()
const todosRoute=require('./routes/todos')

srv.use(express.json())//decode body of request
srv.use(express.urlencoded({extended:true}))//it decode body if body is in urlencoded format


srv.use('/todos',todosRoute)
srv.listen(2324);
