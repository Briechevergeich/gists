const Gists = require('..');
const gists = new Gists(require('../test/support/auth'));

/**
 * List gists for a user.
 */

gists.list('doowb')
  .then(res => console.log(res));
