export default (sequelize, DataTypes) => {
  const AllAmerican = sequelize.define('AllAmerican', {
    TeamId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    School: DataTypes.STRING,
    Number: DataTypes.INTEGER,
    Players: DataTypes.STRING,
    Special: DataTypes.STRING,
    Key: DataTypes.STRING
  });
  return AllAmerican;
};
