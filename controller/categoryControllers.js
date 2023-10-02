import CategoryModel from "../models/CategoryModel.js";

export const getAllCategories = async (_req, res) => {
    try {
        const categories = await CategoryModel.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const createCategory = async (req, res) => {
    try {
        await CategoryModel.create(req.body);
        res.status(200).json({ message: 'Categoría creada con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({
            where: { category_id: req.params.id }
        });

        if (!category) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        await CategoryModel.update(req.body, {
            where: { category_id: req.params.id }
        });

        res.status(200).json({ message: 'Categoría actualizada con éxito' });
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({
            where: { category_id: req.params.id }
        });

        if (!category) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        await CategoryModel.destroy({
            where: { category_id: req.params.id }
        });

        res.status(200).json({ message: 'Categoría eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        res.status(500).json({ message: error.message });
    }
};

