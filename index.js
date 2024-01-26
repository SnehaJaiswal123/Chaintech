const express=require('express')
const app=express()
const cors= require('cors')
require('dotenv').config()
const port=process.env.PORT

const userRouter=require('./routes/user')
const taskRouter=require('./routes/task')

app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,console.log('server is running'))