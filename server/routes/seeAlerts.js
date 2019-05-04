let express = require("express");

let router = express.Router();

let passport = require('passport');

let alertsController = require('../controllers/seeAlerts');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

router.get("/", passport.authenticate('jwt', {session: false}), alertsController.displayalerts);

router.get('/delete/:id', passport.authenticate('jwt', {session: false}), alertsController.performDelete);

module.exports = router;
