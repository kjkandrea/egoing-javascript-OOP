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
