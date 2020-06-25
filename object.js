// 객체 생성(Create)
var memberObject = {
  manager : 'haebogoyang',
  developer : 'karenin',
  designer : 'mummu'
}

// 객체 읽기(Read) : 마침표와 대괄호로 접근 가능
console.log(memberObject.designer);
console.log(memberObject['designer']);

// 객체 수정(Update)
memberObject.designer = 'stone cold';
console.log(memberObject.designer);

// 객체 제거(Delete)
delete memberObject.developer
console.log(memberObject);