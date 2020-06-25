# Part 4. 상속

[JavaScript 객체 지향 프로그래밍 - 13.1. object inheritance](https://www.youtube.com/watch?v=339RrPTZTEU&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=19) 부터


## 객체 간의 상속

### __proto__

>[!WARNING]
> `__proto__` 은 표준이 아니다.
> `__proto__` 속성은 ECMAScript의 스펙 [[Prototype]] 이 자바스크립트로 노출된 것인데 예전 스펙이 레거시 처럼 남아있는 것이다. 

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
