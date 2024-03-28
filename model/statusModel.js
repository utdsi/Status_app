
const mongoose = require("mongoose")


const statusSchema = mongoose.Schema({

    merchant_id:
    {
        type: String,
        required: true
    },
    order_id:
    {
        type: String,
        required: true,
        unique: true
    },
    user_id:
    {
        type: String,
        required: true
    },
    amount:
    {
        type: Number,
        required: true
    },
    
    created_at:
    {
        type: Date,
        default: Date.now
    },
   
    status:
    {
        type: String,
        required: true
    }
})


const StatusModel = mongoose.model("status", statusSchema)

module.exports = { StatusModel }