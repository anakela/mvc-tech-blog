const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

// Homepage
router.use('/', viewRoutes);
// Pages prepended with /api
router.use('/api', apiRoutes);

module.exports = router;