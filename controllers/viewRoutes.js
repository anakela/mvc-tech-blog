const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

// Display blogs and usernames on initial homepage load.
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('home', {
            blogs,
            logged_in: req.session.logged_in,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render individual blog entries.
router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ],
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render user profile page.
router.get('/user-profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('user-profile', {
            ...user,
            logged_in: true,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render the sign-in page.
router.get('/sign-in', (req, res) => {
    // If the user is already logged in, redirect them to their profile.
    if (req.session.logged_in) {
        res.redirect('/user-profile');
        return;
    }
    // If the user's not logged in, display the sign-in page.
    res.render('sign-in');
});

module.exports = router;