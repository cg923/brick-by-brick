const express 			= require('express');
const router			= express.Router();
const bodyParser 		= require('body-parser');
const emailsController 	= require('../controllers/emails');
const docsController 	= require('../controllers/documents');
const statsController 	= require('../controllers/stats');

router.route('/emails')
	.get(emailsController.getEmails);

router.route('/replies')
	.post(emailsController.postReply);

router.route('/documents')
	.get(docsController.getDocuments);

router.route('/stats')
	.get(statsController.getStats);

module.exports = router;