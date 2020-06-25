# 필기 노트

## 객체의 첫번째 인상

> 서로 연관된 변수와 함수를 그룹핑해서 이름을 붙인 것

## 객체 CRUD [01-objectCRUD.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/01-objectCRUD.js)

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

## 용어 정리

### 객체 (Object)

객체는 키(key)와 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.

* 자바스크립트의 함수는 일급 객체임으로 값으로 취급될 수 있다.
* 프로퍼티의 *값*이 함수일 경우 일반함수와 구분하기 위해 이를 *메소드(Method)*라 부른다.

객체는 데이터(프로퍼티)와 그와 관련되는 메소드로 구성된 집합이다. 이를 *객체*라는 상위개념으로 포괄할 수 있기때문에 데이터와 동작을 하나의 단위로 구조화 할 수 있어 유용하다.

#### 프로퍼티, 키, 메소드 (값) [02-objectMethod.js](https://github.com/kjkandrea/egoing-javascript-OOP/blob/master/02-objectMethod.js)

```
const Obj = {
  callMeByYourName : (name) => name === 'karenin' ? 'haebogoyang' : name // 프로퍼티
  // 키               // 메소드 (값)
} // 객체

console.log(Obj.callMeByYourName('karenin')) // haebogoyang
```