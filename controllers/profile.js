/////////////////////////////////////////////////////////
const Index = async () => {

    const { Profile } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await Profile.findAll({order: [['name', 'ASC']]})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => ({             
            idProfile: row.idProfile,
            name: row.name,
            createdAt: new moment(row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        }))  
        
        return { status:200,respuesta }   
    } 
    catch (error) {
        console.log( error )
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }

}
/////////////////////////////////////////////////////////
module.exports  = { Index }
/////////////////////////////////////////////////////////