import recordschema from './recordschema';

export default (sequelize, DataTypes) => {
  const Record17 = sequelize.define('Record17', recordschema(DataTypes));
  return Record17;
};
