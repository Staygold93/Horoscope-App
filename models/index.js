const User = require('./User');
const userSigns = require('./userSigns');

User.hasMany(userSigns , {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

userSigns.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, userSigns };







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
