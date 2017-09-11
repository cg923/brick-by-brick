const express = require('express');
const router	= express.Router();
const bodyParser = require('body-parser');
const emailsController = require('../controllers/emails');
//const statsController = require('../controllers/stats');

router.route('/emails')
	.get(emailsController.getEmails);

module.exports = router;