// const editBlogBtns = document.querySelectorAll('.edit-blog-btn');
// console.log(editBlogBtns);
const editBlogBtn = document.getElementById('edit-blog-btn');
const editBlogTitle = document.getElementById('edit-blog-title');
const editBlogBody = document.getElementById('edit-blog-body');
const updateBlogBtn = document.getElementById('update-blog-btn');
// const editBlogModal = document.getElementById('edit-blog-modal');

const deleteBlogBtn = document.getElementById('delete-blog-btn');

const createBlogModalBtn = document.getElementById('create-blog-modal-btn');
const createBlogBtn = document.getElementById('create-blog-btn');
const createBlogTitle = document.getElementById('create-blog-title');
const createBlogBody = document.getElementById('create-blog-body');

// Create a new blog
createBlogBtn?.addEventListener('click', async (event) => {
    event.preventDefault();

    const title = createBlogTitle.value;
    const body = createBlogBody.value;

    if (title.length === 0 || body.length === 0) {
        alert('Oops!  Please be sure to include both a title and blog content.');
        return;
    }

    try {
        const response = await fetch(`/api/blog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
            })
        });
        await response.json();
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
});

// Update blog
async function updateBlog(event) {
    event.preventDefault();

    const updateBlogId = document.getElementById(event.target.id);
    const blog_id = updateBlogId.dataset.blogid;
    const title = document.getElementById(`edit-blog-title-${updateBlogId.dataset.blogid}`).value;
    const body = document.getElementById(`edit-blog-body-${updateBlogId.dataset.blogid}`).value;

    console.log(title, body);

    try {
        const response = await fetch(`/api/blog/${blog_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                body,
            })
        });

        await response.json();

        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
}

// Delete a blog
async function deleteBlog(event) {
    event.preventDefault();

    const deleteBlogId = document.getElementById(event.target.id);
    const blog_id = deleteBlogId.dataset.blogid;

    try {
        const response = await fetch(`/api/blog/${blog_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await response.json();

        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
}