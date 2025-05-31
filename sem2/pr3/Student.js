class Student {
  constructor(name, age, averageGrade) {
    this._name = name;
    this._age = age;
    this._averageGrade = averageGrade;
  }

  // Геттеры
  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  getAverageGrade() {
    return this._averageGrade;
  }

  // Сеттеры
  setName(name) {
    if (typeof name === 'string' && name.trim() !== '') {
      this._name = name;
    } else {
      console.error('Имя должно быть непустой строкой');
    }
  }

  setAge(age) {
    if (Number.isInteger(age) && age > 0) {
      this._age = age;
    } else {
      console.error('Возраст должен быть положительным целым числом');
    }
  }

  setAverageGrade(grade) {
    if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
      this._averageGrade = grade;
    } else {
      console.error('Средний балл должен быть числом от 0 до 100');
    }
  }
}

// Пример использования
const student = new Student('Иван Иванов', 20, 85);
console.log('\nСтудент:');
console.log('Имя:', student.getName());
console.log('Возраст:', student.getAge());
console.log('Средний балл:', student.getAverageGrade());

student.setName('Петр Петров');
student.setAge(21);
student.setAverageGrade(90);

console.log('\nПосле изменений:');
console.log('Имя:', student.getName());
console.log('Возраст:', student.getAge());
console.log('Средний балл:', student.getAverageGrade());