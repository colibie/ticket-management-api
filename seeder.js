const User = require('./data/user');

module.exports = async () => {
  let user = await User.getUser({ email: 'admin@gmail.com' });

  if (!user) {
    user = await User.createUser('admin@gmail.com', 'admin', { firstName: 'admin' , role: 'admin' });
  }

  return {
    user
  }
}