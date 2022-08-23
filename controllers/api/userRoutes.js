const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id,
                req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(500).res.json({ error });
    }
});

router.post('/sign-in', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email },
        });

        if (!userData) {
            res.status(400).res.json({ message: `Incorrect email or password.  Please try again.` });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).res.json({ message: `Incorrect email or password.  Please try again.` });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: `Yay!  You've successfully logged in!` });
        });
    } catch (error) {
        res.status(500).res.json({ error });
    }
});

router.post('/sign-out', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;