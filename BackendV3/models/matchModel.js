module.exports = (sequelize, DataTypes) => {

    const Match = sequelize.define("matchs", {
        hour: {
            type: DataTypes.STRING,
        },
        opponent: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        name_team: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        player_1: {
            type: DataTypes.STRING,
        },
        player_2: {
            type: DataTypes.STRING,
        },
        player_3: {
            type: DataTypes.STRING,
        },
        player_4: {
            type: DataTypes.STRING,
        },
    },{
        freezeTableName: true
    })

    return Match
}