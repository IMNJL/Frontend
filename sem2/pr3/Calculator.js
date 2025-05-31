class Calculator {
  constructor() {
    this._lastResult = null;
  }

  add(a, b) {
    this._lastResult = a + b;
    return this._lastResult;
  }

  subtract(a, b) {
    this._lastResult = a - b;
    return this._lastResult;
  }

  multiply(a, b) {
    this._lastResult = a * b;
    return this._lastResult;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Деление на ноль невозможно');
    }
    this._lastResult = a / b;
    return this._lastResult;
  }

  getLastResult() {
    return this._lastResult;
  }

  clear() {
    this._lastResult = null;
  }
}

// Пример использования
const calc = new Calculator();
console.log('\nКалькулятор:');
console.log('5 + 3 =', calc.add(5, 3)); // 8
console.log('Последний результат:', calc.getLastResult()); // 8

console.log('5 - 3 =', calc.subtract(5, 3)); // 2
console.log('5 * 3 =', calc.multiply(5, 3)); // 15
console.log('6 / 3 =', calc.divide(6, 3)); // 2

try {
  console.log('6 / 0 =', calc.divide(6, 0));
} catch (e) {
  console.error(e.message); // Деление на ноль невозможно
}