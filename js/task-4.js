const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (loginForm.elements.email.value === '' || loginForm.elements.password.value === '') {
        alert('All form fields must be filled in');
    } else {
        const object = {
            email: loginForm.elements.email.value.trim(),
            password: loginForm.elements.password.value.trim(),
        };
        console.log(object);
        loginForm.reset();
    }
});