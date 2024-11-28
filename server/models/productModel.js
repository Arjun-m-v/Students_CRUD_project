
const product = (sequelize, Sequelize) => {
    const product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        productname: {
            type: Sequelize.STRING,
        },
        product_quantity: {
            type: Sequelize.INTEGER,
        },
        product_rate: {
            type: Sequelize.INTEGER,
        }

    });
    return product
}

module.exports = product