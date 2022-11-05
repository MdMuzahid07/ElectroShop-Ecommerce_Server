module.exports.getAllProducts = (req, res, next) => {
    try {
        const data = "get route working?";


        res.status(200).send({
            success: true,
            message: "data get successfully",
            data: data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.uploadAProduct = (req, res, next) => {
    try {
        const data = "post route working?";


        res.status(200).send({
            success: true,
            message: "data get successfully",
            data: data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.updateAProduct = (req, res, next) => {
    try {
        const data = "update route working?";


        res.status(200).send({
            success: true,
            message: "data get successfully",
            data: data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.deleteAProduct = (req, res, next) => {
    try {
        const data = "delete route working?";


        res.status(200).send({
            success: true,
            message: "data get successfully",
            data: data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};