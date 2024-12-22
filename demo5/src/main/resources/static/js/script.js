let names = document.querySelector("#names"); // Имя пользователя
let sec_name = document.querySelector("#sec_name"); // Фамилия
let email = document.querySelector("#email"); // Email
let password = document.querySelector("#password"); // Пароль
let submit = document.querySelector("#submit"); // Кнопка отправки регистрации

//Функция регистрации
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
        localStorage.setItem('username', namesUser ); 
        localStorage.setItem('subname', sec_nameUser );
        names.value = '';
        sec_name.value = '';
        email.value = '';
        password.value = '';
        window.location.href = 'profil.html'; 
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert("Ошибка: " + error.message);
    });
});
