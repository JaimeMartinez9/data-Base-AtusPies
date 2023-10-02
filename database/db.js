import { Sequelize } from 'sequelize';

const db = new Sequelize('products_app', 'root', 'Cherita99.', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;