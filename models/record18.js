import recordschema from './recordschema';

export default (sequelize, DataTypes) => {
  const Record18 = sequelize.define('Record18', recordschema(DataTypes));
  return Record18;
};
