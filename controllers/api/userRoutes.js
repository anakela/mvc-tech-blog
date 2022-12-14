const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/sign-in', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username },
        });

        if (!userData) {
            res.status(400).json({ message: `Incorrect username or password.  Please try again.` });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: `Incorrect username or password.  Please try again.` });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: `Yay!  You've successfully logged in!` });
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/sign-up', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.json(newUser);
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/sign-out', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).redirect('/sign-out');
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;