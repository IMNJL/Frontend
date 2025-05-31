/**
 * Функция фильтрации массива с использованием callback
 * @param {Array} arr - Исходный массив чисел
 * @param {Function} callback - Функция-предикат
 * @returns {Array} - Отфильтрованный массив
 */
function filterArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

// Фильтрация четных чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = num => num % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log('Четные числа:', evenNumbers); // [2, 4, 6, 8, 10]

// Фильтрация чисел больше 5
const isGreaterThanFive = num => num > 5;
const numbersGreaterThanFive = filterArray(numbers, isGreaterThanFive);
console.log('Числа больше 5:', numbersGreaterThanFive); // [6, 7, 8, 9, 10]



/**
 * Асинхронная функция для получения данных по URL
 * @param {string} url - URL для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Пример использования функции fetchData
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log('Данные:', data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

// Альтернативная реализация с async/await
async function fetchDataAsync(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    throw error;
  }
}

// Пример использования async/await версии
(async () => {
  try {
    const data = await fetchDataAsync('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Данные (async/await):', data);
  } catch (error) {
    console.error('Ошибка (async/await):', error);
  }
})();
