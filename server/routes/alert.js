let express = require('express');

let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let alertController = require('../controllers/alert');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

router.get('/', passport.authenticate('jwt', {session: false}), alertController.displayAlertPage);

router.post('/', passport.authenticate('jwt', {session: false}), alertController.processAlertPage);


module.exports = router;