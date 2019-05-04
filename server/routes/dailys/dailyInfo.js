let express = require("express");

let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let dailyInfoController = require('../../controllers/dailys/dailyInfo');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}


router.get("/", passport.authenticate('jwt', {session: false}), dailyInfoController.displaydailyInfoPage);

router.post("/", passport.authenticate('jwt', {session: false}), dailyInfoController.processAddPage);


module.exports = router;