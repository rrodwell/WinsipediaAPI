import recordschema from './schema/recordschema';

export default (sequelize, DataTypes) => {
  let teams = []
  for (let index = 1; index < 130; index++) {
    global["Record".concat(index)] = sequelize.define("Record".concat(index), recordschema(DataTypes));
    teams.push(global["Record"+index])
  }
  return teams;
};
