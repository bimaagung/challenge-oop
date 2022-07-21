/*
8. Buatlah class dengan dengan nama Shape (bentuk), silahkan gunakan kreatifitas untuk
membuat method dan propertynya. Class tersebut harus memenuhi kriteria berikut:

a. Mengaplikasikan konsep inheritance, dengan menurunkan Class Shape ke dalam 3 sub-
class/child class:

- Rectangle
- Triangle
- Circle
b. Harus mengaplikasikan konsep polymorphism
c. Class Shape tidak boleh diinisiasi langsung menjadi instance object inisiasi hanya boleh
dilakukan pada sub-class/child class nya
*/

class Shape {
  constructor(name) {
    this.name = name;
  }

  cal_luas() {
    return 0;
  }

  conclusion() {
    return `Jadi luas ${this.name} = ${this.cal_luas()}`;
  }
}

class Square extends Shape {
  constructor(sisi) {
    super("square");
    this.sisi = sisi;
  }
  cal_luas() {
    return this.sisi * this.sisi;
  }
}

class Triangle extends Shape {
  constructor(alas, tinggi) {
    super("triangle");
    this.alas = alas;
    this.tinggi = tinggi;
  }
  cal_luas() {
    let setAlas = 0.5 * this.alas;
    return setAlas * this.tinggi;
  }
}

class Circle extends Shape {
  constructor(r) {
    super("circle");
    this.r = r;
  }

  cal_luas() {
    return 3.14 * this.r;
  }
}

let square = new Square(22);
let triangle = new Triangle(10, 3);
let circle = new Circle(17);

console.log(square.conclusion());
console.log(triangle.conclusion());
console.log(circle.conclusion());
