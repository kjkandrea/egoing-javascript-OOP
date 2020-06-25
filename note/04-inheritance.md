# Part 4. 상속

[JavaScript 객체 지향 프로그래밍 - 13.1. object inheritance](https://www.youtube.com/watch?v=339RrPTZTEU&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=19) 부터

## 객체 간의 상속

### __proto__

[09-prototypeInheritance.js : 객체 간의 상속 : __proto__](https://github.com/kjkandrea/egoing-javascript-OOP/blob/b364f767956bafa1f2c6c4b7d7898d7977f5a728/09-prototypeInheritance.js)

> ⚠️ `__proto__` 은 표준이 아니다. ECMAScript의 스펙 [[Prototype]] 이 자바스크립트로 노출된 것인데 예전 스펙이 레거시 처럼 남아있는 것이다. 

해당 문서내에서는 프로토타입(`prototype`)과 명칭이 햇갈려 *프로토*(`__proto__`) 라고 부르기로 한다.

다음과 같이 `__proto__` 를 사용하면 `subObj`가 `superObj`의 프로퍼티에 접근할 수 있다. 

``` javascript
var superObj = {
  superVal : 'super'
}

var subObj = {
  subVal: 'sub'
}

subObj.__proto__ = superObj

console.log(subObj.subVal) // sub
console.log(subObj.superVal) // super
```

프로토로 연관성을 지닌 `superObj` 객체의 값을 변경을 시도하면 어떻게 될까?

``` javascript
var superObj = {
  superVal : 'super'
}

var subObj = {
  subVal: 'sub'
}

subObj.__proto__ = superObj

subObj.superVal = 'sub'
console.log(subObj.superVal) // ?
console.log(superObj.superVal) // ?
```

`subObj.superVal` 은 새로 지정된 값으로 출력된다.
`superVal` 값의 변경을 시도하더라도 `superObj` 원본은 건드려지지 않는다.

``` javascript
subObj.superVal = 'sub'
console.log('2-1',subObj.superVal) // sub
console.log('2-2',superObj.superVal) // super
```

### Object.create()

[09-prototypeInheritance.js : 객체 간의 상속 : Object.create()](https://github.com/kjkandrea/egoing-javascript-OOP/blob/5a0a57c53e05ce7640b2618f79712e812138cc79/09-prototypeInheritance.js)

`Object.create()` 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만든다. 위의 `__proto__` 대신 사용할 수 있다.

다음과 같이 사용한다.

``` javascript
var superObj = {
  superVal : 'super'
}

// superObj를 부모로 하는 객체 만들기
var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log(subObj.subVal) // sub
console.log(subObj.superVal) // super
subObj.superVal = 'sub';

console.log(subObj.superVal) // sub
console.log(superObj.superVal) // super
```

### etc

다음과 같이 콘솔을 출력하면 `true` 가 나온다.

``` javascript
console.log(subObj.__proto__ === superObj) // true
```

### Object.create 기반으로 class 생성자 소스코드 리펙토링

[09-prototypeInheritance.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/09-prototypeInheritance.js)

다음과 같이 소스코드를 변형하여 구현 할 수 있다.

``` javascript
var kim = {
  name: 'andrea',
  score: {
    first: 10, 
    second: 20,
    third: 15
  },
  scoreSum() {
    var val = 0;
  
    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
    }
    
    return val;
  }
}

var lee = Object.create(kim);

lee.name = 'lee';
lee.score = {}
lee.score.first = 15,
lee.score.second = 25,
lee.score.third = 35,
lee.scoreAvg = function(){
  var howMany = Object.keys(this.score).length;

  return this.scoreSum()/howMany;
}

console.log(kim.scoreSum()) // 45
console.log(lee.scoreSum()) // 75
console.log(lee.scoreAvg()) // 75
```