const User = require('./User');
const userSign = require('./userSign');



userSign.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, userSign };







// const User = require('./User');
// const Project = require('./Project');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// module.exports = { User, Project };
