const User = require('./User');
const Horoscope = require('./Horoscope');



Horoscope.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


User.hasOne(Horoscope, {
  foreignKey: 'user_id',
});

module.exports = { User, Horoscope };







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
