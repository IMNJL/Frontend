// Базовый класс Фигура
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Нельзя создать экземпляр абстрактного класса Shape");
    }
  }

  // Абстрактные методы
  getArea() {
    throw new Error("Метод getArea должен быть реализован");
  }

  getPerimeter() {
    throw new Error("Метод getPerimeter должен быть реализован");
  }
}

// Класс Прямоугольник
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Класс Круг
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Пример использования
const rect = new Rectangle(5, 10);
console.log('Прямоугольник:');
console.log('Площадь:', rect.getArea()); // 50
console.log('Периметр:', rect.getPerimeter()); // 30

const circle = new Circle(7);
console.log('\nКруг:');
console.log('Площадь:', circle.getArea()); // ≈153.938
console.log('Периметр:', circle.getPerimeter()); // ≈43.982