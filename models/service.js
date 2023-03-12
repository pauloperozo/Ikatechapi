/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const { DECIMAL,UUID,UUIDV4,ENUM } = require("sequelize")
 
    return sequelize.define('service',{
        idService: { type: UUID,defaultValue:UUIDV4,primaryKey: true},
        idDriver : { type: UUID },
        idClient : { type: UUID },
        price:{ type:DECIMAL(10,2) },
        status:{ type:ENUM(["Pending","Active","Complete"]),defaultValue:"Pending" }
    })
   
}
/////////////////////////////////////////////////////////////