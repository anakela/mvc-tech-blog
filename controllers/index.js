const router = require('express').Router();
const apiRoutes = require('./api');

// Pages prepended with /api
router.use('/api', apiRoutes);

module.exports = router;