# Challenge 14: MVC Tech Blog

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

> Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

> Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

### User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

### Screenshot

![](./public/assets/images/mvc-tech-blog-home.png)
![](./public/assets/images/mvc-tech-blog-sign-in.png)
![](./public/assets/images/mvc-tech-blog-sign-up.png)
![](./public/assets/images/mvc-tech-blog-sign-out.png)
![](./public/assets/images/mvc-tech-blog-dashboard.png)
![](./public/assets/images/mvc-tech-blog-new-blog.png)
![](./public/assets/images/mvc-tech-blog-edit-blog.png)
![](./public/assets/images/mvc-tech-blog-delete-blog.png)
![](./public/assets/images/mvc-tech-blog-empty-comment-error.png)
![](./public/assets/images/mvc-tech-blog-comments.png)
![](./public/assets/images/mvc-tech-blog-edit-comment.png)
![](./public/assets/images/mvc-tech-blog-delete-comment.png)

### Links

- Solution URL: [https://github.com/anakela/mvc-tech-blog](https://github.com/anakela/mvc-tech-blog)
- Live Site URL: [https://anakela-mvc-tech-blog.herokuapp.com/](https://anakela-mvc-tech-blog.herokuapp.com/)

## My Process

### Built With

- JavaScript
- Node.js
- Sequelize.js
- Express.js
- Express-Session
- Express-Handlebars
- Handlebars.js
- MySQL2
- MySQL
- Bcrypt
- Bcrypt.js
- Dotenv

### What I Learned

So far, this was one of the most challenging JavaScript projects on which I've worked.  Several pieces of the assignment created a challenge that took several weeks for me to complete.  These many moving parts included the following:
- I had to create API and view routes
- I also had to create Sequelize models for users, blogs, and comments.
- I completed the visual rendering of the tech blog using Handlebars, which was an entirely different project in and of itself.

Despite how difficult building this tech blog was, it did give me the opportunity to learn a great deal about the different tools I used to put it together.  I am grateful for being able to learn more about Express Sessions, Dotenv elements that helped to keep the database secure, Bcrypt for hashing passwords and other sensitive data, and Handlebars.

### Continued Development

In the future, I would like to add many other useful items to the tech blog.
- First, I would like to incorporate more validation on both the front and back ends, especially when users log in or sign up for an account.
- I would like make better use of modals for invalid login attempts.
- I would like to provide logged in users better access to creating blogs so that they don't always have to go to their dashboards to do so.

### Useful Resources

- [Bootstrap](https://getbootstrap.com/)
- [Coolors.co](https://coolors.co/ccdbdc-80ced7-63c7b2-8e6c88-263d42)
- [Gauger.io: Fonticon](https://gauger.io/fonticon/)
- [Handlebars: Built-in Helpers](https://handlebarsjs.com/guide/builtin-helpers.html)
- [Level Up Coding: Database seeding in Node.js](https://levelup.gitconnected.com/database-seeding-in-node-js-2b2eec5bfaa1)
- [NPM: uuid](https://www.npmjs.com/package/uuid)
- [Sequelize: Validations & Constraints](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)
- [Sequelize: Hooks](https://sequelize.org/docs/v6/other-topics/hooks/)
- [Stack Overflow: Getting text in a Bootstrap 5 card header right aligned](https://stackoverflow.com/questions/69624649/getting-text-in-a-bootstrap-5-card-header-right-aligned)

## Author

- GitHub - [https://github.com/anakela](https://github.com/anakela)
- LinkedIn - [https://www.linkedin.com/in/anakela/](https://www.linkedin.com/in/anakela/)

## Acknowledgments

- Fellow Bootcampers:
  - Nolan Spence
- Bobbi Tarkany (Tutor)
- Scott Nelson (TA)
- Matthew Kaus (TA)
