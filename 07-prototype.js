function Person(name, first, second, third) {
  this.name = name;
  this.score = {};
  this.score.first = first;
  this.score.second = second;
  this.score.third = third;
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

kim.scoreSum = function (advantage) {
  var val = 0;

  for (var name in this.score) {
    if (typeof(this.score[name]) === 'number')
      val += this.score[name]
  }

  if (typeof(advantage) === 'number') {
    return val + advantage;
  }
  
  return val;
}

var lee = new Person('yusoo', 15, 25, 35)

console.log(kim.scoreSum(35)) // 80
console.log(lee.scoreSum()) // 75