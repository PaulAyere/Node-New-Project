const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMyProfile,   
} = require('../controllers/userControllers'); 
const { protect } = require('../middlewares/userAuth');

router.post('/register', registerUser); 
router.post('/login', loginUser);
router.get('/profile', protect, getMyProfile); 

module.exports = router;

