
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
