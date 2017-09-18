const express 			= require('express');
const router			= express.Router();
const bodyParser 		= require('body-parser');
const emailsController 	= require('../controllers/emails');
const docsController 	= require('../controllers/documents');
const statsController 	= require('../controllers/stats');

// --------- E-mails ---------- //
// ---------------------------- //

// These routes exist to satisfy a project requirement
// and are not to be used, except for INDEX.

// INDEX & CREATE
router.route('/emails')
	.get(emailsController.getEmails)
	.post(emailsController.postEmail);

// SHOW
router.route('/emails/:id')
	.get(emailsController.getEmail);

// UPDATE
router.route('/emails/:id')
	.put(emailsController.updateEmail);

// DESTROY
router.route('/emails/:id')
	.delete(emailsController.deleteEmail);

// --------- Replies ---------- //
// ---------------------------- //

// CREATE
router.route('/replies')
	.post(emailsController.postReply);

// -------- Documents --------- //
// ---------------------------- //
// INDEX
router.route('/documents')
	.get(docsController.getDocuments);

// ---------- Stats ----------- //
// ---------------------------- //
// INDEX
router.route('/stats')
	.get(statsController.getStats);

module.exports = router;