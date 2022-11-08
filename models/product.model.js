const mongoose = require('mongoose');
const productSchema = require('../utils/schema/product.schema');


const productModel = mongoose.model("products", productSchema);

module.exports = productModel;