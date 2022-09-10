const commentBtn = document.getElementById('post-comment');
const commentInput = document.getElementById('comment-textbox');

const editCommentBtn = document.getElementById('');

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
        await response.json();
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }
});

// Update comment
async function updateComment(event) {
    event.preventDefault();

    const updateCommentId = document.getElementById(event.target.id);
    const comment_id = updateCommentId.dataset.commentid;
    const body = document.getElementById(`edit-comment-body-${updateCommentId.dataset.commentid}`).value;

    try {
        const response = await fetch(`/api/comment/${comment_id}`, {
            method: 'PUT',
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
}

// Delete a comment
async function deleteComment(event) {
    event.preventDefault();

    const deleteCommentId = document.getElementById(event.target.id);
    const comment_id = deleteCommentId.dataset.commentid;

    try {
        const response = await fetch(`/api/comment/${comment_id}`, {
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