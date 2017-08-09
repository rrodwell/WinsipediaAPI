export default (sequelize, DataTypes) => {
  const Heisman = sequelize.define('Heisman', {
    TeamId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    School: DataTypes.STRING,
    Trophies: DataTypes.INTEGER,
    Special: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
  });

  return Heisman;
};
