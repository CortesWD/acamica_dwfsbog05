/**
 * Generic Error
 */
const authUser = (req, res, next) => {
  const { query } = req;
  const { user } = query;

  if ( user && user === 'admin' ) {
    next();
  } else {
    res.status(403);
    res.send('error in auth');
  }
};

module.exports = {
  authUser
};


