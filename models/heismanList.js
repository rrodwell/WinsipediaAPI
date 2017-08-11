/**
 * Created by ryanrodwell on 8/11/17.
 */
export default (sequelize, DataTypes) => {
    const HeismanList = sequelize.define('HeismanList', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Year: DataTypes.INTEGER,
        Winner: DataTypes.STRING,
        School: DataTypes.STRING,
        Position: DataTypes.STRING,
        Points: DataTypes.INTEGER,
        PercentPointsPossible: DataTypes.STRING
    });

    return HeismanList;
};
