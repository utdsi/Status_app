
const express = require("express")

const statusRouter = express.Router()

const {status} = require("../controller/statusController")


statusRouter.post("/status",status)



module.exports = {statusRouter}