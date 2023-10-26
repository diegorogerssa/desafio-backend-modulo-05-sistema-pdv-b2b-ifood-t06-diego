

const detailController = async (req, res) =>{

    try{

        const user = await req.user 

        return res.status(200).json(user)

    }catch(error){
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = detailController