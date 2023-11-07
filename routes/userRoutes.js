import express from 'express'
import userCtrl from '../controllers/userController.js'

const router = express.Router()

router.route('/').get(userCtrl.getHome)
router.post('/login',userCtrl.login)
router.post('/logout',userCtrl.logout)
router.post('/register',userCtrl.register)
router.get('/protected', userCtrl.verifyToken, (req, res) => {
    // Access the user data from the request object (added by the verifyToken middleware)
    const user = req.user;
    res.json({ message: 'Protected resource accessed successfully!', user });
  });


export default router