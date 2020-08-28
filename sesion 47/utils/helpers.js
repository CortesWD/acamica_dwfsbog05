const { users } = require('./../db');

/**
 * @param {String} user - string
 * @param {String} password - string
 * @description validate if user exist and password is correct
 * @returns {Boolean} Boolean
 */
const validateUser = (user, password) => {
  const userDb = users.find(el => el.user === user);
  return !!userDb ? userDb.password === password : false;
};


module.exports = {
  validateUser
}