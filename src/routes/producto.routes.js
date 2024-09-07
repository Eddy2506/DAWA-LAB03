import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/listProd', async(req, res)=>{
    try{
        res.render('producto/listProd');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/addProd', (req,res)=>{
    res.render('producto/addProd');
});

router.post('/addProd', async(req, res)=>{
    try{
        res.redirect('/listProd');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/editProd', (req,res)=>{
    res.render('producto/editProd');
});

router.post('/editProd', async(req, res)=>{
    try{
        res.redirect('/listProd');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------------------------------------------------//

export default router;