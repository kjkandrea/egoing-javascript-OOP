var Obj = {
  context: function(){
    console.log(this === Obj) // true
  },
  depth : {
    context: function(){
      console.log(this === Obj.depth) // true
    }
  }
}

Obj.context();
Obj.depth.context();

var kim = {
  name: 'andrea',
  score : {
    first: 10,
    second: 20,
    third: 15
  },
  scoreSum: function() {
    var val = 0;

    for (var name in this.score) {
      if (typeof(this.score[name]) === 'number')
        val += this.score[name]
    }
    
    return val;
  }
}

console.log(kim.scoreSum()) // 45