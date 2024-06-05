const router = require('express').Router();

const apiRoutes = require('./api');
const homeROutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;