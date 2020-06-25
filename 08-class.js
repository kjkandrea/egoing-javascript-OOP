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
  constructor(name, first, second, third, fourth, fifth) {
    super(name, first, second, third)
    this.score.fourth = fourth;
    this.score.fifth = fifth;
  }

  scoreAvg() {
    var howMany = Object.keys(this.score).length;

    return super.scoreSum()/howMany; // scoreSum() 에 대한 결과를 받아 score 키의 갯수만큼 나누어 평균을 도출
  }
}

var kim = new PersonPlus('andrea', 10, 20, 15, 25, 35)

console.log(kim.scoreSum()) // 105
console.log(kim.scoreAvg()) // 21