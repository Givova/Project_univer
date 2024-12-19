document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    const userInput = document.getElementById('userInput');
    const fam = "аверченков";


button.addEventListener('click', function() {
// Получаем значение из поля ввода
const inputValue = userInput.value;
if(inputValue.toLowerCase() == fam){
             message.textContent = 'Это правильный ответ! Квест оказался слишком лёгким?))';
         }
         else{
             message.textContent = 'Увы! Нужно большу ходить на пары(';
         }
});
});




function changeBackgroundColor() {
    const colors = ['#E38D25', '#C62A17', '#2F2255', '#55224A']; // Массив цветов
    const blocks = document.querySelectorAll('.block_kvests'); // Получение всех элементов
    let previousColor = null; // Переменная для хранения предыдущего цвета

    blocks.forEach(block => {
        let selectedColor;

        do {
            const randomIndex = Math.floor(Math.random() * colors.length); // Случайный индекс
            selectedColor = colors[randomIndex]; // Выбор цвета
        } while (selectedColor === previousColor); // Проверка, совпадает ли с предыдущим цветом

        block.style.backgroundColor = selectedColor; // Установка цвета фона
        previousColor = selectedColor; // Обновляем предыдущий цвет
    });
}

// Вызываем функцию при загрузке страницы
window.onload = changeBackgroundColor;
// .............................................................................................................................








// document.getElementById('inputForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение формы

//     const userInput = document.getElementById('userInput').value;
//     const correctString = "правильный ответ"; // Заданная строка
//     let result = 0; // Переменная для хранения результата

//     // Сравнение введенного значения с заданной строкой
//     if (userInput === correctString) {
//         result = 1; // Если совпадает
//     }

//     // Перенаправление на новую страницу с результатом
//     window.location.href = `result.html?result=${result}`;
// });

