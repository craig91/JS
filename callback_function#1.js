var welcomeMsg = function(){
    console.log("Welcome to the great underground empire");
}

welcomeMsg()


var start = function(callback){
    callback()
}

start(welcomeMsg)





var look = function(dir){
    if(dir === 'west'){
        console.log("There is a small mailbox here.");
    }else{ (dir === 'east'); {
        console.log("You are stainding next to a white house");
        }
    }
}

var walk = function(dir){
    if(dir === 'west') {
        console.log("It is very dark, you are likely to be eaten by a grue!");
    }else{ (dir === 'south');{
        console.log("You are standing on the edge of a deep chasm.");
     }
  }
}

var getInput = (param, cb);{
    cb(param);
}

getInput('west', look)
getInput('east', look)
getInput('west', walk)
getInput('south', walk)

