// Write a constructor function called Drink that will allow you to make new Drink
// objects with a name and carbonated property. The Drink function should also include
// a shake prototype method.

function Drink (name, carbonated) {
  this.name = name
  this.carbonated = carbonated
  this.shake = function () {
    if(carbonated === true) {
      console.log("EXPLOSION!!!")
    } else {
      console.log("nothing happens...")

    }
  }
}

let sprite = new Drink('sprite', true)
sprite.name
sprite.shake()

let oj = new Drink('oj', false)
oj.shake()
oj.name

let coke = new Drink('coke', true)
coke.name
coke.carbonated
coke.shake()