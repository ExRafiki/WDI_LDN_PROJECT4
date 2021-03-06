const router = require('express').Router();
const users = require('../controllers/users');
const games = require('../controllers/games');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const getgame = require('../controllers/getgame');
//-----------------GAME ROUTES--------------------------------------------------
router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .delete(secureRoute, games.delete)
  .get(games.show)
  .put(games.update);
//--------------------USER ROUTES-----------------------------------------------
router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .delete(secureRoute, users.delete)
  .put(secureRoute, users.update);
//-------------LOGIN REGISTER ROUTES--------------------------------------------
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);
//----------REVIEWROUTES--------------------------------------------------------
router.route('/games/:id/reviews/:reviewId')
  .get(games.showReview)
  .delete(secureRoute, games.deleteReview);

router.route('/games/:id/reviews')
  .post(secureRoute, games.createReview);

router.route('/getgame')
  .get(getgame.getGame);
//------------------------------------------------------------------------------
module.exports = router;
