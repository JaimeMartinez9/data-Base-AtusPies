import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define("products", {
    products_id:{type:DataTypes.STRING, primaryKey: true, autoIncrement: true},
    title:{type:DataTypes.STRING}, 
    product_description:{type:DataTypes.TEXT},
    price:{type:DataTypes.INTEGER},
    category_id:{type:DataTypes.STRING},
},{
    timestamps: false
}) 
export default ProductModel;