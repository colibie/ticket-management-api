const User = require('./data/user');

module.exports = async () => {
  let user = await User.getUser({ email: 'admin@gmail.com' });

  if (!user) {
    user = await User.createUser({ firstName: 'admin', email: 'admin@gmail.com', password: 'admin', role: 'admin' });
  }

  return {
    user
  }
}