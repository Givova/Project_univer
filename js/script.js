
// let names = document.querySelector("#names");
// let sec_name = document.querySelector("#sec_name");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let submit = document.querySelector("#ssubmit");

// let users = {};

// function User(names, sec_name, email, password){
//     this.names = names;
//     this.sec_name = sec_name;
//     this.email = email;
//     this.password = password;
// }

// function createId(users){
//     return Object.keys(users).length;
// }

// submit.addEventListener('click', () => {
//     const namesUser = names.value;
//     const sec_nameUser = sec_name.value;
//     const emailUser = email.value;
//     const passwordUser = password.value;

//     const user = new User(namesUser, sec_nameUser,emailUser,passwordUser);

//     const userId = 'User' + createId(users);
//     users[userId] = user;

//     console.log(users);
// })




let names = document.querySelector("#names");
let sec_name = document.querySelector("#sec_name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");

let users = {};

function User(names, sec_name, email, password) {
    this.names = names;
    this.sec_name = sec_name;
    this.email = email;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', (event) => {
    event.preventDefault(); // Останавливает стандартное поведение формы

    const namesUser  = names.value.trim();
    const sec_nameUser  = sec_name.value.trim();
    const emailUser  = email.value.trim();
    const passwordUser  = password.value.trim();

    // Валидация
    if (!namesUser  || !sec_nameUser  || !emailUser  || !passwordUser ) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const user = new User(namesUser , sec_nameUser , emailUser , passwordUser );

    const userId = 'User ' + createId(users);
    users[userId] = user;

    console.log(users);

    // Очистка полей
    names.value = '';
    sec_name.value = '';
    email.value = '';
    password.value = '';
});
