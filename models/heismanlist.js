export default (sequelize, DataTypes) => {
  const HeismanList = sequelize.define('HeismanList', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Year: DataTypes.INTEGER,
    Winner: DataTypes.STRING,
    School: DataTypes.STRING,
    Position: DataTypes.STRING,
    Points: DataTypes.INTEGER,
    PercentPointsPossible: DataTypes.FLOAT,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
  });
  return HeismanList;
};
