/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const { STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('address',{
        idAddress:{ type:UUID,defaultValue:UUIDV4,primaryKey: true },
        idUser:{ type:UUID },
        name:{ type:STRING },
        location:{ type:STRING }
    })
   
}
/////////////////////////////////////////////////////////////