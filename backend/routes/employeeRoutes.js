import express from 'express'
import employeeCtrl from '../controllers/employeeController.js'
import userCtrl from '../controllers/userController.js'

const router = express.Router()

// router.route('/').post(employeeCtrl.getHome)
router.post('/create',employeeCtrl.create)
router.get('/',employeeCtrl.getAll)
router.get('/:id',employeeCtrl.getOne)
router.delete('/:id',employeeCtrl.deleteEmp)
router.patch('/:id',employeeCtrl.updateEmp)

router.get('/protected', userCtrl.verifyToken, (req, res) => {
    // Access the user data from the request object (added by the verifyToken middleware)
    const user = req.user;
    res.json({ message: 'Protected resource accessed successfully!', user });
  });


export default router