const Product = require('../models/productModel');
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des produits." });
    }
};
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });
        } else {
            res.status(500).json({ message: "Une erreur s'est produite lors de la création du produit." });
        }
    }
};
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.update(req.body);
            res.json(product);
        } else {
            res.status(404).json({ message: 'Produit non trouvé.' });
        }
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });
        } else {
            res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du produit." });
        }
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Produit supprimé.' });
        } else {
            res.status(404).json({ message: 'Produit non trouvé.' });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du produit." });
    }
};