module.exports = (sequelize, DataTypes) => {

    const Message = sequelize.define("message", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    })

    return Message
}