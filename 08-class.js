class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.score = {};
    this.score.first = first;
    this.score.second = second;
    this.score.third = third;
  }

  scoreSum() {
    var val = 0;
  
    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
    }
    
    return val;
  }
}

class PersonPlus extends Person {
  scoreAvg() {
    var val = 0;
    var howMany = 0;
  
    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
        howMany += 1;
    }
    
    return val/howMany;
  }
}

var kim = new PersonPlus('andrea', 10, 20, 15)

console.log(kim.scoreSum()) // 45
console.log(kim.scoreAvg()) // 15