

const requestURl = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURl)
xhr.onload = () => {
    console.log(xhr.response)
}
xhr.send()




// const btn = document.getElementById('btn');
// btn.addEventListener('click', function handleClick() {
//   btn.textContent = 'Спасибо!';
// });


document.addEventListener('DOMContentLoaded', function() {
    const newButton = document.getElementById('btn');

    newButton.addEventListener('click', function() {
        // Переключаем класс active при нажатии
        newButton.classList.toggle('active'); 
        btn.textContent = 'Спасибо!';

       
    });
});