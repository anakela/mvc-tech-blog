const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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
        console.log(error);
        res.status(500).json({ error });
    }
});

// Delete a comment.
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!deleteComment) {
            res.status(400).json({ message: `Oops, that comment doesn't exist!`});
            return;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

module.exports = router;