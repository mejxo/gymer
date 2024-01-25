document.addEventListener('DOMContentLoaded', function () {
    const form = [...document.querySelector('.loginform').children];

    form.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, i * 100);
    });

    window.onload = () => {
        if (sessionStorage.name) {
            location.href = '/';
        }
    };

    const email = document.querySelector('.form-login-email-input');
    const password = document.querySelector('.form-login-password-input');
    const confirmPassword = document.querySelectorAll('.form-login-password-input')[1];
    const submitBtn = document.querySelector('.signup-button');

    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
            }),
        })        
            .then((res) => res.json())
            .then((data) => {
                validateData(data);
            });
    });

    const validateData = (data) => {
        if (!data.name) {
            alertBox(data);
        } else {
            sessionStorage.name = data.name;
            sessionStorage.email = data.email;
            location.href = '/';
        }
    };

    const alertBox = (data) => {
        const alertContainer = document.querySelector('.alert-box');
        const alertMsg = document.querySelector('.alert');
        alertMsg.innerHTML = data;

        alertContainer.style.top = `5%`;
        setTimeout(() => {
            alertContainer.style.top = null;
        }, 5000);
    };
});

/* &Mejxo; &Berta; &MrMarcus; &Pkepy */