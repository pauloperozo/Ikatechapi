/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const { STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('profile',{
        idProfile:{ type:UUID,defaultValue:UUIDV4,primaryKey: true},
        name:{ type:STRING }
    })
   
}
/////////////////////////////////////////////////////////////