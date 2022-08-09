
const express = require('express');
const router = express.Router();
const evaDadosRouter = require('../controller/api-controller');

router.get('/',async(req,res,next)=>{
    const dadosEva = await evaDadosRouter.getData();
    console.log(dadosEva)
    res.render('index', dadosEva)
})
module.exports = router;