const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/api', apiRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
