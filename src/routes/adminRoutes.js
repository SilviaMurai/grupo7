const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

//const uploadFiles = require('../middlewares/uploadFiles');
//const validateInput = require('../middlewares/validator');

//npm install --save express-validator
const {body}= require ('express-validator');      //12/12/2023

router.get('/', adminControllers.admin);
router.post('/', adminControllers.adminsearch);     //'/search/:buscar'
router.get('/create', adminControllers.create);
  router.post('/create', adminControllers.createprocess);   //post o put?
router.get('/edit/:id', adminControllers.edit);
  router.put('/edit/:id', adminControllers.editprocess);
router.delete('/delete/:id', adminControllers.deleteprocess); //FALTABA method-override SINO error 405: The requested method DELETE is not allowed for this URL.
//PARECE que esta ruta NO hace FALTA: router.post('/delete/:id', adminControllers.deleteado);

module.exports = router;

