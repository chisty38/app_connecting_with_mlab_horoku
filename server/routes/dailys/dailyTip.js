let express = require("express");

let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let dailyTip = require('../../controllers/dailys/dailyTip');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}


router.get("/", passport.authenticate('jwt', {session: false}), dailyTip.displayDailyTip);


module.exports = router;
