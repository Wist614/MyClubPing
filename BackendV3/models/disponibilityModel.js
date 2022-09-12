module.exports = (sequelize, DataTypes) => {

    const Disponibility = sequelize.define("disponibilitys", {
        dispo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
    })

    return Disponibility
}