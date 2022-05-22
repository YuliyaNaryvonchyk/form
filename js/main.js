window.onload = function () {
    let name = document.getElementById('FullName');
    let regex = /[0-9]/g;
    name.oninput = function(event) {
        this.value = this.value.replace(regex, '');
    }

    let user_name = document.getElementById('YourUsername');
    let signs = /[.,]/g;
    user_name.oninput = function(event) {
        this.value = this.value.replace(signs, '');
    }

    let chek = document.getElementById('checked');
    chek.onchange = function (){
        if (chek.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    let button = document.getElementById ('form-button');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let RepeatPassword = document.getElementById('RepeatPassword');
    let password_result = 0;
    let button_function = true;

    button.onclick = function() {
        if (!button_function) return false;
        let RepeatPassword_value = document.getElementById('RepeatPassword').value;
        let password_value = document.getElementById('password').value;

        if (name.value.length === 0) {
            alert('Заполните поле Full Name');
        } else if (user_name.value.length === 0) {
            alert('Заполните поле User Name');
        } else if (email.value.length === 0) {
            alert('Заполните поле E-mail');
        } else if (password.value.length === 0) {
            alert('Заполните поле Password');
        } else if (RepeatPassword.value.length === 0) {
            alert('Заполните поле Repeat Password');
        } else if (password_value !== RepeatPassword_value) {
            alert('Пароли не совпадают');
        } else if (chek.checked === false) {
            alert('Чекбокс не выбран');
        } else {
            alert ('OKAY')
        }
    }

    let account_check = document.getElementById ('account_check');
    let title_form = document.getElementById ('title-form');

    account_check.onclick = function() {
        button_function = false;
        title_form.innerText = 'Log in to the system';
        let elem = document.querySelectorAll('.remove');
        for (let i = 0; i < elem.length; i++) {
            elem[i].parentNode.removeChild(elem[i]);
        }
        button.value = 'Sign In';
    }
}