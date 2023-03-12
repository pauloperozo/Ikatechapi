//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
const router = Router()
//////////////////////////////////////////////////////////////////////////////////////////
const RegisterValidations = require('../validations/auth.js')
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/login',RegisterValidations,async (req, res)=>{

    const moment = require('moment')
    const bcryptjs = require('bcryptjs')

    const { login,password } = req.body

    const message   = "Login o Password Invalido"
    const createAt  =  new moment().format("YYYY-MM-DD HH:mm:ss")
    
    const { Read } = require('../controllers/user')
    const resultado = await Read({login})
    if(resultado.status == 200)
    {
        const user = resultado.respuesta
        const equalPassword = bcryptjs.compareSync(password,user.password)
        if(!equalPassword) return res.status( 400 ).send({success:false,message})

        const payload = { idUser : user.idUser, createAt }    
        const { GenerateToken } = require('../services/jwt')
        const respuesta  = { success:true, idUser: user.idUser, token:GenerateToken( payload ),createAt }
        return res.status( 200 ).send(respuesta)
    }
    else return res.status( 400 ).send({success:false,message})
 
})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////