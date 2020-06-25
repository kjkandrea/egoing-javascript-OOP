# 필기 노트

## 객체의 첫번째 인상

> 서로 연관된 변수와 함수를 그룹핑해서 이름을 붙인 것

## 객체 CRUD

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