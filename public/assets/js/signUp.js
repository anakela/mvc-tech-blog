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
        $(document).ready(function () {
            
        });
    }

});