var superObj = {
  superVal : 'super'
}

var subObj = {
  subVal: 'sub'
}

subObj.__proto__ = superObj

console.log('1-1',subObj.subVal) // sub
console.log('1-2',subObj.superVal) // super
subObj.superVal = 'sub'
console.log('2-1',subObj.superVal) // sub
console.log('2-2',superObj.superVal) // super
console.log('2-3',subObj) // { subVal: 'sub', superVal: 'sub' }
