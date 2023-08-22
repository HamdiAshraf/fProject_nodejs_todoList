require('./db/connect')
const express=require('express');
const app=express();
const tasksRouter=require('./routes/tasks')
const { dbConnect }=require('./db/connect')
require('dotenv').config()
const { notFound }=require('./middleware/not-found')

const port=process.env.PORT ||3000;

//middleware
app.use(express.static('./public')) //serve static files
app.use(express.json())

//routes

app.use('/api/v1/tasks',tasksRouter)

app.use(notFound) //to handle not found route

// to check if connect in database successful then run the server
const start=async ()=>{
    try {
        await dbConnect(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)
        })

    } catch (error) {
        console.log(error)
    }
}


start()

