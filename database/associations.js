const User = require('./models/User');
const Role = require('./models/Role');

Role.hasMany(User);

User.belongsTo(Role);