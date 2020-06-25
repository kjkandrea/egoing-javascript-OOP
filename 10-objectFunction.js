var kim = {
  name: 'andrea',
  score: {
    first: 10, 
    second: 20,
    third: 15
  },
}

var lee = {
  name: 'yusoo',
  score: {
    first: 15, 
    second: 25,
    third: 35
  },
}

function scoreSum() {
  var val = 0;

  for (var name in this.score) {
    if (typeof(this.score[name]) === 'number')
      val += this.score[name]
  }
  
  return val;
};

/* call */
console.group('call()')
console.log(scoreSum.call(kim)) // 45
console.log(scoreSum.call(lee)) // 75
console.groupEnd()

/* bind */
var kimScoreSum = scoreSum.bind(kim)
var leeScoreSum = scoreSum.bind(lee)

console.group('bind()')
console.log(kimScoreSum()) // 45
console.log(leeScoreSum()) // 75
console.groupEnd()