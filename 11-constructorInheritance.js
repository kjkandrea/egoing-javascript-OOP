function Person(name, first, second) {
  this.name = name;
  this.score = {
    first : first,
    second : second
  };
}

Person.prototype.scoreSum = function () {
  var val = 0;
  for (var name in this.score) {
    if (typeof(this.score[name]) === 'number')
      val += this.score[name]
  }
  return val;
}

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second)
  this.score.third = third;
}

PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus

PersonPlus.prototype.scoreAvg = function(){
  var howMany = Object.keys(this.score).length;

  return this.scoreSum()/howMany
}

var kim = new Person('andrea', 15, 25)
console.log(kim.scoreSum())

var lee = new PersonPlus('yusoo', 20, 25, 35)
console.log(lee.scoreAvg())

console.log(kim.constructor)
console.log(lee.constructor) // [Function: PersonPlus]