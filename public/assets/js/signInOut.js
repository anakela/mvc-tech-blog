const signInBtn = document.getElementById('sign-in-btn');
const signInUser = document.getElementById('user-input');
const credentialsCloseBtn = document.getElementById('invalid-credentials-close-btn');
// const credentialsModal = document.getElementById('invalid-credentials-modal');
const signInPass = document.getElementById('pass-input');
// const signOutLink = document.getElementById('sign-out-link');
const signOutBtn = document.getElementById('sign-out-btn');

signInBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = signInUser.value;
    const password = signInPass.value;

    if (username.trim().length === 0 || password.trim().length < 8) {
        $("#invalid-credentials-modal").modal("show");
        return;
    }

    try {
        const response = await fetch('/api/users/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        await response.json();

        if (response.ok) window.location.href = '/';
    } catch (error) {
        res.status(500).json({ error });
    }
});

signOutBtn?.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('/api/users/sign-out', {
            method: 'POST',
        });
        window.location.href = "/sign-out";
    } catch (error) {
        res.status(500).json({ error });
    }
});