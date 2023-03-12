//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
const router = Router()
//////////////////////////////////////////////////////////////////////////////////////////
const Auth   = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/service')
    const resultado = await Index()
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idService',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/service')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,async ( req, res ) => {

    const { Create }  = require('../controllers/service')
    const data = Object.assign({idClient:req.session.idUser},req.body)
    const resultado = await Create( data )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idService',Auth,async (req, res) => {
  
    const { Update }  = require('../controllers/service')
    const data = Object.assign({ idService: req.params.idService},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idService',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/service')
    const resultado = await Delete( req.params )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////