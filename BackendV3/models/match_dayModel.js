module.exports = (sequelize, DataTypes) => {

    const Match_day = sequelize.define("match_day", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY
        }
    })

    return Match_day
}