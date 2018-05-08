const passport = require('passport');

module.exports = (server) => {
  server.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

  server.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
};
