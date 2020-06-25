console.group('built-in Math');
console.log(Math.PI) 
console.log(Math.floor(Math.random() * 10) + 1)
console.groupEnd('built-in Math');

var MyMath = {
  PI : Math.PI,
  random : function () {
    return Math.random();
  },
  floor : function (val) {
    return Math.floor(val);
  }
}

console.group('MyMath');
console.log(MyMath.PI);
console.log(MyMath.floor(MyMath.random() * 10) + 1);
console.groupEnd('MyMath');

/*
* built-in Math
*   3.141592653589793
*   9
* MyMath
*   3.141592653589793
*   1
*/