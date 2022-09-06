const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');
// const withAuth = require('../../utils');

// Get blog post.
// router.get('/:id', withAuth, async (req, res) => {
//     try {
//         const getBlog = await Blog.findByPk({
//             title: req.body.title,
//             body: req.body.body,
//             user_id: req.session.user_id,
//         },
//         {
//             where: {
//                 id: req.body.id,
//             }
//         });
//         res.status(200).json(getBlog);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error });
//     }
// });

// Create a new blog post.
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// Edit a blog post.
// router.put('/edit/:id', withAuth, async (req, res) => {
//     console.log(req.body, 'EDITING');
//     console.log(req.params.id, 'ID');

//     try {
//         const editBlog = await Blog.update({
//             title: req.body.title,
//             body: req.body.body,
//             user_id: req.session.user_id,
//         },
//         {
//             where: {
//                 id: req.params.id,
//             }
//         });
//         res.status(200).json(editBlog);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error });
//     }
// });

// Update a blog post.
router.put('/:id', withAuth, async (req, res) => {
    console.log(req.body, 'UPDATING');
    console.log('ID', req.params.id);
    try {
        const updateBlog = await Blog.update({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        },
        {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updateBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
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
            res.status(400).json({ message: `Sorry, there's no blog with that ID!`});
            return;
        }
        res.status(200).json(deleteBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

module.exports = router;