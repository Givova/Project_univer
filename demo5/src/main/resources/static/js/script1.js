 let loginEmail = document.querySelector("#login_email"); // Email для логина 
let loginPassword = document.querySelector("#login_password"); // Пароль для логина 
let loginSubmit = document.querySelector("#login_submit"); // Кнопка отправки логина 
//Функция логина 
loginSubmit.addEventListener('click', (event) => { 
    event.preventDefault(); // Останавливает стандартное поведение формы 
    
    const loginEmailUser = loginEmail.value.trim(); 
    const loginPasswordUser = loginPassword.value.trim(); 
    
    // Валидация логина 
    if (!loginEmailUser || !loginPasswordUser ) { 
    alert("Пожалуйста, заполните все поля для логина."); 
    return; 
    } 
    
    // Создание объекта для логина 
    const loginData = { 
    email: loginEmailUser , 
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
    // .then(data => { 
    // alert("Логин успешен: " + JSON.stringify(data)); // Уведомление о успехе 
    // // Перенаправление на страницу профиля 
    // localStorage.setItem('isLoggedIn', 'true');
    // window.location.href = 'profil.html'; 
    // })
    .then(data => { 
        alert("Логин успешен: " + JSON.stringify(data)); // Уведомление о успехе 
        
        // Сохраняем имя и фамилию в localStorage 
        localStorage.setItem('username', data.username); // Предполагается, что сервер возвращает username 
        localStorage.setItem('subname', data.subname); // Предполагается, что сервер возвращает subname 
        
        // Перенаправление на страницу профиля 
        localStorage.setItem('isLoggedIn', 'true'); 
        window.location.href = 'profil.html'; 
        }) 
    .catch(error => { 
    console.error('Ошибка:', error); 
    alert("Ошибка: " + error.message); 
    }); 
   });
