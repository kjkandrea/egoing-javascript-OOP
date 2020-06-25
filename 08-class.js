class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
  }
}

var kim = new Person('andrea', 10, 20, 15)

console.log(kim) // Person { name: 'andrea', first: 10, second: 20, third: 15 }