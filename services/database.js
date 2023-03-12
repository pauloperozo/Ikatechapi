const Sequelize = require("sequelize")

const { SERVICES,HOST,USER,PASSWORD,DATABASE } = process.env

/* Instanciar la Conexion*/
const sequelize = new Sequelize(DATABASE,USER,PASSWORD,{
    host:HOST,
    dialect:SERVICES,
    timezone: "-05:00"
})

/* Validar Conexion */
sequelize.authenticate().then( ( succes ) => console.log("**** Conectado Correctamente **** "), error  => {
    console.error(error) 
    process.exit(0)
})

const { Address,Profile,Service,User,Vehicle } = require('../models/index')( sequelize )
sequelize.sync({ alter: true, force: false }).then( async response =>{
    console.log("OK")
}).catch( error => {

    console.error( error )
    process.exit(0)
    
})

module.exports = { sequelize,Address,Profile,Service,User,Vehicle }