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


export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findOne({
            where: { products_id: req.params.id }
        });

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        await ProductModel.update(req.body, {
            where: { products_id: req.params.id }
        });

        res.status(200).json({ message: 'Producto actualizado con éxito' });
    } catch (error) {
        console.error('Error al actualizar el producto:', error); 
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findOne({
            where: { products_id: req.params.id }
        });

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        await ProductModel.destroy({
            where: { products_id: req.params.id }
        });

        res.status(200).json({ message: 'Producto eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error); 
        res.status(500).json({ message: error.message });
    }
};

