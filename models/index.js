const AddressModel  = require("./address")
const ProfileModel  = require("./profile")
const ServiceModel  = require("./service")
const UserModel     = require("./user")
const VehicleModel  = require("./vehicle")

module.exports = ( sequelize )=> {
    return {
        Address : AddressModel( sequelize ),
        Profile : ProfileModel( sequelize ),
        Service : ServiceModel( sequelize ),
        User    : UserModel( sequelize ),
        Vehicle : VehicleModel( sequelize )
    }
}
