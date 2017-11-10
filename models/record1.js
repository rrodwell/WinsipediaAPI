import recordschema from './recordschema';

export default (sequelize, DataTypes) => {
  const Record1 = sequelize.define('Record1', recordschema(DataTypes));
  return Record1;
};
