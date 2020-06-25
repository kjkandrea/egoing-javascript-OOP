# Part 2. 객체 생성자

[JavaScript 객체지향 프로그래밍 - 6.1. constructor의 필요성](https://www.youtube.com/watch?v=cTR00wW-kZo&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=8) 부터

## 생성자 (constructor)

### new

new 연산자를 사용하여 함수를 이용하여 새로운 객체를 생성할 수 있다. 

``` javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

for(var car in car1){
  console.log(car, car1[car])
}

// "make" "Eagle"
// "model" "Talon TSi"
// "year" 1993
```

#### new 연산자를 이용해 리팩토링

`Person`이라는 함수를 만들어 `05-this.js`의 `kim` 객체를 리팩토링 하여보자.

``` javascript
 function Person(name, first, second, third) {
  this.name = name;
  this.score = {};
  this.score.first = first;
  this.score.second = second;
  this.score.third = third;
  this.scoreSum = function() {
    var val = 0;

    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
    }
    
    return val;
  }
}

var kim = new Person('andrea', 10, 20, 15)

console.log(kim.scoreSum()) // 45
```