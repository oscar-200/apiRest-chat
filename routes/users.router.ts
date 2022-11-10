import { Router } from "express";


const router = Router();

router.get('/', (req, res)=>{
    res.json({
        msg: "api users get"
    })
});

export default router;