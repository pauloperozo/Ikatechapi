/////////////////////////////////////////////////////////
const Index = async () => {

    const { Address } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await Address.findAll({order: [['createdAt', 'DESC']]})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => {             
            const { idAddress,name,location,createdAt,updatedAt } = row 
            return {
                idAddress,
                name,
                location,
                createdAt:new moment(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                updatedAt:new moment(updatedAt).format("YYYY-MM-DD HH:mm:ss")
            } 
        })
        
        return { status:200,respuesta }   
    } 
    catch (error) {
        console.log( error )
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }

}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Address } = require("../services/database")
 
    try {
        const resultado = await Address.findOrCreate({where:{ name:data.name },defaults:data})    
        if(resultado[1] == true)return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idAddress:resultado[0].idAddress } } 
        else return { status:400,respuesta: { success:false,message:"Registro ya Existente"} } 
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Address } = require("../services/database")
 
    try {
        const resultado = await Address.destroy({where:{idAddress: data.idAddress}})     
        if( resultado == 0)return { status:400,respuesta: { success:false,message:"No Se Puede Borrar"} }   
        else return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idAddress:data.idAddress } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Create,Delete }
/////////////////////////////////////////////////////////