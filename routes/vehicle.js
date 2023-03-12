//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
const router = Router()
//////////////////////////////////////////////////////////////////////////////////////////
const Auth = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/vehicle')
    const resultado = await Index()
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idVehicle',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/vehicle')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,async ( req, res ) => {

    const { Create }  = require('../controllers/vehicle')
    const data = Object.assign({idUser:req.session.idUser},req.body)
    const resultado = await Create( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idVehicle',Auth,async (req, res) => {
  
    const { Update }  = require('../controllers/vehicle')
    const data = Object.assign({ idVehicle: req.params.idVehicle},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idVehicle',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/vehicle')
    const resultado = await Delete( req.params )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////