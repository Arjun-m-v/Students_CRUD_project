const Sequelize = require('sequelize');


const sequelize = new Sequelize('crud', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
  });


const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;


db.students_list = require('./StudentslistModel')(sequelize,Sequelize);
db.user = require('./userModel')(sequelize,Sequelize);


module.exports = db;