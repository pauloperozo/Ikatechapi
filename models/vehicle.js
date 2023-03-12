/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const { STRING,UUID,UUIDV4,ENUM } = require("sequelize")
 
    return sequelize.define('vehicle',{
        idVehicle: { type: UUID,defaultValue:UUIDV4,primaryKey: true },
        idUser:{ type:UUID },
        imei:{ type:STRING },
        plate:{ type:STRING },
        location:{ type:STRING},
        status:{ type:ENUM(["NoSignal","Stop","Moving"]),defaultValue:"NoSignal" }
    })
   
}
/////////////////////////////////////////////////////////////