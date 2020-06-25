var kim = {
  name: 'andrea',
  score: {
    first: 10, 
    second: 20,
    third: 15
  },
  scoreSum() {
    var val = 0;
  
    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
    }
    
    return val;
  }
}

var lee = Object.create(kim);

lee.name = 'lee';
lee.score = {}
lee.score.first = 15,
lee.score.second = 25,
lee.score.third = 35,
lee.scoreAvg = function(){
  var howMany = Object.keys(this.score).length;

  return this.scoreSum()/howMany;
}

console.log(kim.scoreSum()) // 45
console.log(lee.scoreSum()) // 75
console.log(lee.scoreAvg()) // 75