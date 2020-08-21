
/**
 * Middlewares
 */
const md = require('./../middleware');


/**
 * Service
 */
const { Service } = require('./Service');

/**
 * CONSTANTS
 */
const { URLS, autores } = require('./../utils/constants');

const setRoutes = (app) => {
  // Author
  const service = new Service();
  service.setModel(autores);
  app.get(`${URLS.API_BASE}${URLS.AUTHORS}/:id?`, md.auth.authUser, service.get);
};


module.exports = {
  setRoutes
}