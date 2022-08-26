const signInBtn = document.getElementById('sign-in-btn');
const signInEmail = document.getElementById('email-input');

const emailCloseBtn = document.getElementById('invalid-email-close-btn');
const emailModal = document.getElementById('invalid-email-modal');

const signInPass = document.getElementById('pass-input');

const passCloseBtn = document.getElementById('invalid-pass-close-btn');
const passModal = document.getElementById('invalid-pass-modal');

signInBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = signInEmail.value;
    const password = signInPass.value;

    if (email.trim().length === 0) {
        $(document).ready(function() {
            $(emailModal).modal("show");
            $(emailCloseBtn).click(function() {
                $(emailModal).modal("hide");
            });
        });
        return;
    }

    if(password.trim().length < 12) {
        $(document).ready(function() {
            $(passModal).modal("show");
            $(passCloseBtn).click(function() {
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
                email,
                password,
            })
        });
        await response.json();

        if (response.ok) window.location.href='/';
    } catch (error) {
        res.status(500).json({ error });
    }
});