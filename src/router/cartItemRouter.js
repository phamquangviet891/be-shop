const express= require("express");
const router = express.Router();

const cartItemController = require('../controller/cartItemController')

router.post('/createCartItem',cartItemController.createCartItem)
router.get('/findAllCartItem',cartItemController.findAllCartItem)
router.get('/findCartItemsByUserId',cartItemController.findCartItemsByUserId)
module.exports = router;