# Part 2. 객체 생성자

[JavaScript 객체지향 프로그래밍 - 6.1. constructor의 필요성](https://www.youtube.com/watch?v=cTR00wW-kZo&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=8) 부터 [JavaScript 객체지향 프로그래밍 - 7.2. prototype을 이용해서 재사용성을 높이기](https://www.youtube.com/watch?v=7uL0xiFBlJI&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=12) 까지

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

[06-objectFactory.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/06-objectFactory.js)

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

**생성자 패턴으로 변경하였기 때문에 필요에 따라 객체를 다음과 같이 추가로 생성할 수 있다.**

```
var kim = new Person('andrea', 10, 20, 15)
var lee = new Person('yusoo', 15, 25, 35)

console.log(kim.scoreSum()) // 45
console.log(lee.scoreSum()) // 75
```

### 프로토타입 (prototype)

#### 프로토타입 이란?

객체들이 공통으로 사용하는 속성값

#### prototype의 이점

prototype 을 이용하면 new 를 이용해 새로운 객체를 찍어낼 때 마다 같은 동작을 하는 객체의 속성 값 (여기서는 함수) 를 생성하는 것이 비효율적으로 반복되는 것을 막을 수 있다. **성능 향상과 메모리 절약**

#### prototype을 이용해 리팩토링

[07-prototype.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/07-prototype.js)

prototype을 이용하여 `scoreSum` 함수를 다음과 같이 분리해 낼 수 있다.

``` javascript
 function Person(name, first, second, third) {
  this.name = name;
  this.score = {};
  this.score.first = first;
  this.score.second = second;
  this.score.third = third;
}

Person.prototype.scoreSum = function() {
  var val = 0;

  for (var name in this.score) {
    if (typeof(this.score[name]) === 'number')
      val += this.score[name]
  }
  
  return val;
}

var kim = new Person('andrea', 10, 20, 15)
var lee = new Person('yusoo', 15, 25, 35)

console.log(kim.scoreSum()) // 45
console.log(lee.scoreSum()) // 75
```

일반적으로 변수는 생성자 자체에 담고, 함수는 prototype에 담는다.
