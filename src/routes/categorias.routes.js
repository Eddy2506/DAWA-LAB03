import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/listCat', async(req, res)=>{
    try{
        res.render('categoria/listCat');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/addCat', (req,res)=>{
    res.render('categoria/addCat');
});

router.post('/addCat', async(req, res)=>{
    try{
        res.redirect('/listCat');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/editCat', (req,res)=>{
    res.render('categoria/editCat');
});

router.post('/editCat', async(req, res)=>{
    try{
        res.redirect('/listCat');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------------------------------------------------//

export default router;