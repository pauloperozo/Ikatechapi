
module.exports = async () => {

    const { Profile } = require('../services/database')

    const profiles = await Profile.count()
    if(profiles == 0)
    {
        await Profile.create({name:"Cliente"})
        await Profile.create({name:"Conductor"})
    }
}

