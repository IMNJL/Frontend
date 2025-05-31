// Часть 1: Работа с навигационным меню
document.addEventListener('DOMContentLoaded', function() {
    // Часть 2: Игра "Угадай число"
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restartButton');

    // Проверяем, есть ли сохраненное число в sessionStorage
    let secretNumber;
    if (sessionStorage.getItem('secretNumber')) {
        secretNumber = parseInt(sessionStorage.getItem('secretNumber'));
        message.textContent = 'Продолжаем игру! Угадай число от 1 до 100.';
    } else {
        startNewGame();
    }

    // Обработчик кнопки "Проверить"
    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Пожалуйста, введите число от 1 до 100!';
            return;
        }

        if (userGuess === secretNumber) {
            message.textContent = `Поздравляю! Вы угадали число ${secretNumber}!`;
            sessionStorage.removeItem('secretNumber');
        } else if (userGuess < secretNumber) {
            message.textContent = 'Загаданное число больше!';
        } else {
            message.textContent = 'Загаданное число меньше!';
        }

        guessInput.value = '';
        guessInput.focus();
    });

    // Обработчик кнопки "Начать заново"
    restartButton.addEventListener('click', startNewGame);

    function startNewGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        sessionStorage.setItem('secretNumber', secretNumber.toString());
        message.textContent = 'Новая игра! Угадай число от 1 до 100.';
        guessInput.value = '';
        guessInput.focus();
    }

    // Обработчик нажатия Enter в поле ввода
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            guessButton.click();
        }
    });
});