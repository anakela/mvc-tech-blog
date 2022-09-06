const commentBtn = document.getElementById('post-comment');
const commentInput = document.getElementById('comment-textbox');

// Create a new comment
commentBtn?.addEventListener('click', async (event) => {
    event.preventDefault();

    const body = commentInput.value;
    const blog_id = commentBtn.dataset.blogid;
    
    if (body.trim().length === 0) {
        $("#empty-comment-modal").modal("show");
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
        console.log(body);
        await response.json();
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
});

// Update a comment


// Delete a comment
