const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils');

// Create a new blog post.
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).res.json(newBlog);
    } catch (error) {
        res.status(500).res.json({ error });
    }
});

// Update a blog post.
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updateBlog = await Blog.update({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        });
        res.status(200).res.json(updateBlog);
    } catch (error) {
        res.status(500).res.json({ error });
    }
});

// Delete a blog post.
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteBlog = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!deleteBlog) {
            res.status(400).res.json({ message: `Sorry, there's no blog with that ID!`});
            return;
        }
        res.status(200).res.json(deleteBlog);
    } catch (error) {
        res.status(500).res.json({ error });
    }
});

module.exports = router;