const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll();
        res.status(200).json(allComments);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Get one comment
router.get('/:id', async (req, res) => {
    try {
        const oneComment = await Comment.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(oneComment);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Create a new comment.
router.post('/:blog_id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            blog_id: req.params.blog_id,
        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Update a comment.
router.put('/:id', async (req, res) => {
    try {
        const updateComment = await Comment.update({
            body: req.body.body,
            user_id: req.body.user_id,
        },
            {
                where: {
                    id: req.params.id,
                }
            });
        if (!updateComment) {
            res.status(400).json({ message: `Oops, that comment doesn't exist!` });
            return;
        }
        res.status(200).json(updateComment);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Delete a comment.
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!deleteComment) {
            res.status(400).json({ message: `Oops, that comment doesn't exist!` });
            return;
        }
        res.status(200).json(deleteComment);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;