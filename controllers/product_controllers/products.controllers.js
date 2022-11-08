const ProductModel = require("../../models/product.model");

module.exports.getAllProducts = async (req, res, next) => {
    try {
        const result = await ProductModel.find({});


        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.postAProduct = async (req, res, next) => {
    try {

        const product = new ProductModel(req.body);
        const result = await product.save();

        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.updateAProduct = (req, res, next) => {
    try {
        const data = "update route working?";


        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.deleteAProduct = (req, res, next) => {
    try {
        const data = "delete route working?";


        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};