const knex = require("../database/knex")
const migration = require("./queryMigration")
const dotenv = require("dotenv")

dotenv.config()

const createMigrations = async (req, res) =>{

    try{

        if(process.env.NODE_ENV === 'production'){
            const migration = await knex.raw(migration)

        return res.status(201).json({
            message: "Tabelas foram implementadas no render"
        })
        }else{

            return res.status(500).json({
                message: "Sua solicitação não pode ser atendida porque a aplicação não esta em modo de produção"
            })
        }

    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createMigrations
}