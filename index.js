

const express = require("express")

const app = express()
require('dotenv').config()


const { connection } = require("./config/db")
const {statusRouter} = require("./route/statusRoute")
app.use(express.json())

///fbewjbfjhewbfhejwbnfewij

app.get("/", (req, res) => {


    res.send("Welcome to the Story-App-Backend")
})
app.use("/",statusRouter)




app.listen(process.env.port, async () => {


    try {
        await connection

        console.log("connected to database")
    } catch (error) {

        console.log(error)
    }
    console.log(`listening on port ${process.env.port}`)
})




