'use strict';

var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db        = {};

config.define = {
  freezeTableName: true,
}

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable],config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

console.log(config);
//sequalize the models
var allamericanModel = sequelize.import('./allamerican')
db[allamericanModel.name] = allamericanModel;

var heisman = sequelize.import('./heisman')
db[heisman.name] = heisman;

var heismanlist = sequelize.import('./heismanlist')
db[heismanlist.name] = heismanlist;

var rank = sequelize.import('./rank')
db[rank.name] = rank;

var team = sequelize.import('./team')
db[team.name] = team;

sequelize.import('./record').forEach(element => {
  db[element.name] = element;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
