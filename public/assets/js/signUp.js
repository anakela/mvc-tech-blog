const signUpBtn = document.getElementById('sign-up-btn');
const usernameInput = document.getElementById('create-user');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const passwordConfirm = document.getElementById('password-confirm');

signUpBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = passwordConfirm.value;

    if (username.trim().length === 0) {
        alert(`Please enter a valid username.  It must be at least four characters long.`)
        return;
    }

    if (email.trim().length === 0) {
        alert(`Please enter a valid email address.`);
        return;
    }

    if (password.trim().length < 12) {
        alert(`Please enter a valid password.  It must be at least 12 characters long.`)
        return;
    }

    if (!password === confirmPassword) {
        alert(`Oops, your passwords don't match.  Please try again.`);
        return;
    }

    try {
        const response = await fetch('/api/users/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        });
        await response.json();
        // Redirects the user to the user profile page.
        window.location.href='/user-profile';
    } catch (error) {
        res.status(500).json({ error });
    }

});