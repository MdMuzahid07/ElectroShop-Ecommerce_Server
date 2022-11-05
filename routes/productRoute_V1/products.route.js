const express = require('express');
const { getAllProducts, uploadAProduct, updateAProduct, deleteAProduct } = require('../../controllers/product_controllers/products.controllers');
const router = express.Router()


router.route("/")
    .get(getAllProducts)
    .post(uploadAProduct)

router.route("/:id")
    .patch(updateAProduct)
    .delete(deleteAProduct)

module.exports = router;