class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.score = {};
    this.score.first = first;
    this.score.second = second;
    this.score.third = third;
  }
}

Person.prototype.scoreSum = function() {
  var val = 0;

  for (var name in this.score) {
    if (typeof(this.score[name]) === 'number')
      val += this.score[name]
  }
  
  return val;
}

var kim = new Person('andrea', 10, 20, 15)

console.log(kim.scoreSum())