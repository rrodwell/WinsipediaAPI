import recordschema from './recordschema';

export default (sequelize, DataTypes) => {
  const Record16 = sequelize.define('Record16', recordschema(DataTypes));
  return Record16;
};
