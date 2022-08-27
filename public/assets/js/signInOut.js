const signInBtn = document.getElementById('sign-in-btn');
const signInUser = document.getElementById('user-input');
const userCloseBtn = document.getElementById('invalid-user-close-btn');
const userModal = document.getElementById('invalid-user-modal');
const signInPass = document.getElementById('pass-input');
const passCloseBtn = document.getElementById('invalid-pass-close-btn');
const passModal = document.getElementById('invalid-pass-modal');

signInBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = signInUser.value;
    const password = signInPass.value;

    if (username.trim().length === 0) {
        $(document).ready(function () {
            $(userModal).modal("show");
            $(userCloseBtn).click(function () {
                $(userModal).modal("hide");
            });
        });

        username.innerText = '';
        password.innerText = '';
        return;
    }

    if (password.trim().length < 12) {
        $(document).ready(function () {
            $(passModal).modal("show");
            $(passCloseBtn).click(function () {
                $(closeModal).modal("hide");
            });
        });
        return;
    }

    try {
        const response = await fetch('/api/user/sign-in', {
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