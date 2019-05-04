let express = require("express");

let router = express.Router();

let passport = require('passport');

let checkListController = require('../controllers/checkList');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET contact list page - READ */

router.get("/", requireAuth, checkListController.displayResultPage);

module.exports = router;
