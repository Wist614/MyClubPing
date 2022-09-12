module.exports = (sequelize, DataTypes) => {

    const Stock = sequelize.define("stock", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    })

    return Stock
}