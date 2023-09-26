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
    try{
    await ProductModel.create(req.body);
        res.status(200).json({message: "Producto creado con éxito"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

