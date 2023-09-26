import ProductModel from '../models/ProductModel.js';

export const getAllProducts = async (_req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.json(products)
    }catch (error){ 
        res.status(500).json({message:error.message})
    }
};

export const createProduct = async (req, res) => {
    const { title, description, price } = req.body;
    res.status(201).json({message: "Producto creado con éxito"});
};