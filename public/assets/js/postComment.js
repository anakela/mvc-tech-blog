const commentBtn = document.getElementById('post-comment');
const commentInput = document.getElementById('comment-textbox');

commentBtn?.addEventListener('click', async (event) => {
    console.log("Hit me!");
    event.preventDefault();
    const body = commentInput.value;
    const blog_id = commentBtn.dataset.blogid;
    console.log(blog_id);
    if (body.trim().length === 0) {
        alert(`Please enter a comment before posting.`);
        return;
    }

    try {
        const response = await fetch(`/api/comment/${blog_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body,
            })
        });
        await response.json();
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
});