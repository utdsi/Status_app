const {StatusModel} = require("../model/statusModel")


//----------------------creating------------------------



const status = async (req,res)=>{


    try {
        
        const {merchant_id,order_id,user_id,amount,status} = req.body

        const new_status = new StatusModel({merchant_id,order_id,user_id,amount,status})

        await new_status.save()
        res.status(201).send({ status: "1", msg: "Status Successfull!", data: [] })


    } catch (error) {

        res.status(500).send({ status: "2", msg: "Internal server error", data: [] })
    }
}




module.exports = {status}

