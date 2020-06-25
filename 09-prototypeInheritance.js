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

console.log(subObj.__proto__ === superObj) // true