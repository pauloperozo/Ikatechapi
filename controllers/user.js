/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { User } = require("../services/database")
    const moment = require('moment')
 
    try {   
        const resultado =  await User.findOne({ where: data })
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = {             
            idUser: resultado.dataValues.idUser,
            idProfile: resultado.dataValues.idProfile,
            password:resultado.dataValues.password,
            login: resultado.dataValues.login,
            createdAt: new moment(resultado.dataValues.createdAt).format("YYYY-MM-DD HH:mm:ss")
        }

        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        const resultado = await User.findOrCreate({where:{ login:data.login },defaults:data})    
        if(resultado[1] == true)return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idUser:resultado[0].idUser } } 
        else return { status:400,respuesta: { success:false,message:"Registro ya Existente"} } 
    } 
    catch (error) {
        console.log( error )
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
module.exports  = { Read,Create }
/////////////////////////////////////////////////////////