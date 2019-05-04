let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
//router.get('/', indexController.displayHomePage);

//router.get('/dailys', indexController.displayDailysPage);

/* GET about page. */
//router.get('/video', indexController.displayVideoPage);

/* GET products page. */
//router.get('/checkList', indexController.displayCheckListPage);

/* GET contact page. */
//router.get('/vitalSign', indexController.displayvitalSignPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
