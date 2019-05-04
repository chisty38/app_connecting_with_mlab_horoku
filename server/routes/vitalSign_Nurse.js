let express = require("express");

let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let vitalController = require("../controllers/vitalSign_Nurse");

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET contact list page - READ */

router.get("/", passport.authenticate('jwt', {session: false}), vitalController.displayvitalList);

// GET the Add page for the Contact-List

router.get("/add", passport.authenticate('jwt', {session: false}), vitalController.displayAddPage);

// POST - process the Add page for the Contact-List

router.post("/add", passport.authenticate('jwt', {session: false}), vitalController.processAddPage);


router.get("/edit/:id", passport.authenticate('jwt', {session: false}), vitalController.displayEditPage);

/* POST - process the information from Edit page */

router.post("/edit/:id", passport.authenticate('jwt', {session: false}), vitalController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), vitalController.performDelete);

module.exports = router;
