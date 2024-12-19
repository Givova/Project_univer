let names = document.querySelector("#names"); // Имя пользователя
let sec_name = document.querySelector("#sec_name"); // Фамилия
let email = document.querySelector("#email"); // Email
let password = document.querySelector("#password"); // Пароль
let submit = document.querySelector("#submit"); // Кнопка отправки регистрации

let loginEmail = document.querySelector("#login_email"); // Email для логина
let loginPassword = document.querySelector("#login_password"); // Пароль для логина
let loginSubmit = document.querySelector("#login_submit"); // Кнопка отправки логина

// Функция регистрации
submit.addEventListener('click', (event) => {
    event.preventDefault(); // Останавливает стандартное поведение формы

    const namesUser = names.value.trim();
    const sec_nameUser = sec_name.value.trim();
    const emailUser = email.value.trim();
    const passwordUser = password.value.trim();

    // Валидация
    if (!namesUser || !sec_nameUser || !emailUser || !passwordUser) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Создание объекта пользователя
    const user = {
        username: namesUser,       // Переименовываем на 'username'
        subname: sec_nameUser,     // Переименовываем на 'subname'
        email: emailUser,
        password: passwordUser
    };

    // Отправка данных на сервер
    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) // Преобразуем объект user в JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при регистрации: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        alert("Регистрация успешна: " + data);
        // Очистка полей
        names.value = '';
        sec_name.value = '';
        email.value = '';
        password.value = '';
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert("Ошибка: " + error.message);
    });
});

// Функция логина
loginSubmit.addEventListener('click', (event) => {
    event.preventDefault(); // Останавливает стандартное поведение формы

    const loginEmailUser = loginEmail.value.trim();
    const loginPasswordUser = loginPassword.value.trim();

    // Валидация логина
    if (!loginEmailUser || !loginPasswordUser) {
        alert("Пожалуйста, заполните все поля для логина.");
        return;
    }

    // Создание объекта для логина
    const loginData = {
        email: loginEmailUser,
        password: loginPasswordUser
    };

    // Отправка данных на сервер для логина
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData) // Преобразуем объект loginData в JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при логине: ' + response.statusText);
        }
        return response.json(); // Получаем JSON ответ
    })
    .then(data => {
        alert("Логин успешен: " + JSON.stringify(data)); // Уведомление о успехе
        // Очистка полей для логина
        loginEmail.value = '';
        loginPassword.value = '';
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert("Ошибка: " + error.message);
    });
});