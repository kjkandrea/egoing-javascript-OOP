# Part 3. 클래스 문법

[JavaScript 객체 지향 프로그래밍 - 8.1. Classes](https://www.youtube.com/watch?v=cmcx88U7xBE&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=13) 부터

## class

JavaScript class는 ECMAScript 2015을 통해 소개되었으며, 기존 prototype 기반의 상속 보다 명료하게 사용할 수 있습니다.

`class`는 **객체를 만드는 공장**이다.

### class로 객체 생성하기

다음과 같은 문법으로 객체를 생성할 수 있다.

``` javascript
class Person {
  
}

var kim = new Person()
console.log(kim) // Person {}
```

콘솔을 통해 빈 객체가 생성된것을 볼 수 있다.

### constructor

`constructor` 메서드는 `class` 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드이다.

* 클래스는 `constructor` 를 하나씩 만 가질 수 있다.
* constructor 메서드는 자동으로 호출 된다.

다음과 같이 `constructor`에 `console.log`를 적어놓으면 `kim.constructor()` 형식으로 호출하지 않아도 실행되는것을 볼 수 있다.

``` javascript
class Person {
  constructor() {
    console.log('안녕. 나는 constructor야.')
  }
}

var kim = new Person()
// 안녕. 나는 constructor야.
```

#### constructor에 인자를 주어 객체 만들기

2단원의 생성자 함수와 유사하게 constructor에서 인자를 받아 프로퍼티들을 생성할 수 있다.

``` javascript
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
```

### 메소드 만들기

#### 1. prototype 사용할 수 있다.

함수형 객체 생성 모델과 동일하게 `prototype`을 통해 메소드를 생성할 수 있다.

``` javascript 
class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.score = {};
    this.score.first = first;
    this.score.second = second;
    this.score.third = third;
  }
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

console.log(kim.scoreSum()) // 45
```