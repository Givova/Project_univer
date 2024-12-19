// var colors = ['rgba(204, 204, 255, 1)', 'rgba(255, 204, 255, 1)', 'rgba(204, 153, 255, 1)', 'rgba(102, 51, 255, 1)', 'rgba(204, 51, 255, 1)', 'rgba(255, 255, 255, 1)'];
// var random_color = colors[Math.random() * colors.length ^ 0];
// document.getElementById('block_kvests').style.backgroundColor = random_color;
// // document.getElementById('block_kvests').style.backgroundColor = '#C62A17;'

function changeBackgroundColor() {
    const colors = ['#E38D25', '#C62A17', '#2F2255', '#55224A' ]; // Массив цветов 'rgba(85, 34, 74, 1);', 'rgba(47, 34, 85, 1);', 'rgba(198, 42, 23, 1);', 'rgba(227, 141, 37, 1);'
    const randomIndex = Math.floor(Math.random() * colors.length); // Случайный индекс
    const selectedColor = colors[randomIndex]; // Выбор цвета
    const block = document.querySelector('.block_kvests'); // Получение элемента
    block.style.backgroundColor = selectedColor; // Установка цвета фона
}

// Вызываем функцию при загрузке страницы
window.onload = changeBackgroundColor;

  