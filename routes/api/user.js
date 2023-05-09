const router = require('express').Router();
const userController = require('C:/Users/zeta/Desktop/API_Port/controllers/userController.js');


router.post('/create',userController.add);
router.get('/list',userController.list);
router.get('/listOne/:email', userController.listOne);
router.delete('/delete/:email', userController.delete);
router.put('/update/:email', userController.update);


module.exports = router;