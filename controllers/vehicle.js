/////////////////////////////////////////////////////////
const Index = async () => {

    const { Vehicle } = require("../services/database")
    const moment = require('moment')

    try {   

        const resultado =  await Vehicle.findAll({order: [['createdAt', 'DESC']]})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}

        const respuesta = resultado.map( row => {             
            const { idVehicle,imei,plate,createdAt,updatedAt } = row 
            return {
                idVehicle,
                imei,
                plate,
                createdAt:new moment(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                updatedAt:new moment(updatedAt).format("YYYY-MM-DD HH:mm:ss")
            } 
        })
        
        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }

}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Vehicle } = require("../services/database")
 
    try {
        const resultado = await Vehicle.create( data )    
        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idVehicle:resultado.dataValues.idVehicle } } 
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Vehicle } = require("../services/database")
 
    try {
        const resultado = await Vehicle.destroy({where:{idVehicle: data.idVehicle}})     
        if( resultado == 0)return { status:400,respuesta: { success:false,message:"No Se Puede Borrar"} }   
        else return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idVehicle:data.idVehicle } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Create,Delete }
/////////////////////////////////////////////////////////