const Product = require("../models/product.models");

// CRUD


module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then((allProducts) => res.json({ products: allProducts}))
        .catch(err => res.json ({ message: "Something is wrong!", error: err}));
};

module.exports.findOneProduct = (req,res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json ({product: oneSingleProduct}))
        .catch(err => res.json ({ message: "Something is wrong!", error:err }));
};

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne ({ _id: req.params.id })
        .then(resule => res.json ({result:result}))
        .catch(err => res.json ({ message: "Something is really wrong!", error:err}));
};

modules.exports.updateOneProduct = (req,res) => {
    Product.findOneAndUpdate ({ _id: req.params.id}, req.body, {new:true})
        .then(updatedproduct => res.json ({ product: updatedproduct }));
};

modules.exports.createNewProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json ({ product: newProduct}))
        .catch(err => res.json({ message: "Something is wrong!!!", error: err}));
};
