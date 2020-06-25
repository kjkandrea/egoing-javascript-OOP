# 필기 노트

## 객체의 첫번째 인상

> 서로 연관된 변수와 함수를 그룹핑해서 이름을 붙인 것

## 01 : 객체 CRUD 

[01-objectCRUD.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/01-objectCRUD.js)

### Create

manager, developer, designer로 구성된 객체를 생성한다.

```
var memberObject = {
  manager : 'haebogoyang',
  developer : 'karenin',
  designer : 'mummu'
}
```

### Read

마침표와 대괄호 두 가지 접근이 가능하다.

```
console.log(memberObject.designer); // mummu
```

```
console.log(memberObject['designer']); // mummu
```

### Update

해당 객체의 *키*를 선택하여 *값*을 변경한다.

```
memberObject.designer = 'stone cold';
console.log(memberObject.designer); // stone cold
```

### Delete 

객체의 속성을 제거하기 위한 `delete` 연산자를 사용한다.

```
delete memberObject.manager
console.log(memberObject);
// { manager: 'haebogoyang', designer: 'stone cold' }
```

## 02 : 용어 정리

### 객체 (Object)

객체는 키(key)와 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.

* 자바스크립트의 함수는 일급 객체임으로 값으로 취급될 수 있다.
* 프로퍼티의 *값*이 함수일 경우 일반함수와 구분하기 위해 이를 *메소드(Method)*라 부른다.

객체는 데이터(프로퍼티)와 그와 관련되는 메소드로 구성된 집합이다. 이를 *객체*라는 상위개념으로 포괄할 수 있기때문에 데이터와 동작을 하나의 단위로 구조화 할 수 있어 유용하다.

#### 프로퍼티, 키, 메소드 (값) 

[02-objectMethod.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/02-objectMethod.js)

```
const Obj = {
  callMeByYourName : (name) => name === 'karenin' ? 'haebogoyang' : name // 프로퍼티
  // 키               // 메소드 (값)
} // 객체

console.log(Obj.callMeByYourName('karenin')) // haebogoyang
```

## 03 : 객체와 반목문

[03-objectLoop.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/03-objectLoop.js)

### Question

> 반복문으로 memberObject 객체의 키와 값을 모두 출력해보세요.

```
var memberObject = {
  manager : 'haebogoyang',
  developer : 'karenin',
  designer : 'mummu'
}
```

### Answer

for in 문을 사용하여 배열처럼 루프를 돌릴 수 있다.

```
for(var name in memberObject) {
  console.log(name, memberObject[name])
}

// manager haebogoyang
// developer karenin
// designer mummu
```

## 04 : 내장 객체 Math로 MyMath 만들어보기

[04-builtIn.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/04-builtIn.js)

### Question

> Math.PI, Math.random, Math.floor와 동일한 역할을 하는 MyMath 객체를 만들어 보세요.

### Answer

```
var MyMath = {
  PI : Math.PI,
  random : function () {
    return Math.random();
  },
  floor : function (val) {
    return Math.floor(val);
  }
}
```
```
console.log(MyMath.PI); // 3.141592653589793
console.log(MyMath.floor(MyMath.random() * 10) + 1); // 6
```

객체는 서로 연관된 변수와 함수들을 객체라는것에 그룹핑하여 이름을 붙인것이다. 일종의 디렉토리 역할을 한다.

* 각 함수들의 이름이 충돌하는것을 방지
* 객체라는 수납상자에 관련함수들을 깔끔하게 정리정돈

## 객체에서의 this

[05-this.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/05-this.js)

메소드에서의 this는 메소드가 포함된 객체를 가르킨다.

```
var Obj = {
  context: function(){
    console.log(this === Obj) // true
  },
  depth : {
    context: function(){
      console.log(this === Obj.depth) // true
    }
  }
}

Obj.context();
Obj.depth.context();
```

이를 이용하여 객체 내부의 메소드에서 `this`를 사용하여 객체를 가르키는 방식으로 구현할 수 있다.

```
var kim = {
  name: 'andrea',
  score : {
    first: 10,
    second: 20,
    third: 15
  },
  scoreSum: function() {
    var val = 0;

    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
    }
    
    return val;
  }
}

console.log(kim.scoreSum()) // 45
```

or 

```
function scoreSum() {
  var val = 0;

  for (var name in this.score) {
    if (typeof(this.score[name]) === 'number')
      val += this.score[name]
  }
  
  return val;
}

var kim = {
  name: 'andrea',
  score : {
    first: 10,
    second: 20,
    third: 15
  },
  scoreSum: scoreSum
}

console.log(kim.scoreSum()) // 45
```