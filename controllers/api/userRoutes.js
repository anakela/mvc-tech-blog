const router = require('express').Router();
const bcrypt = require('bcryptjs');

const {
    Blog,
    User
} = require('../../../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({});
    } catch (error) {
        res.status(500).res.json({ error });
    }
});

module.exports = router;