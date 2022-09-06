const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// A user has many blogs.
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// A blog can only belong to one user.
Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

// A comment can only belong to one user.
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// Blog has many comments.
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

// A user posts many comments.
// User.belongsToMany(Comment, {
//     foreignKey: 'user_id',
// });

module.exports = {
    User,
    Blog,
    Comment,
};