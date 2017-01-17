var scope = "global"
function checkScope() {
    var scope = "local";
    alert(scope)
}


scope = "global"
function checkScope() {
    scope = "local";
    document.write(scope);
    myScope = "local";
    document.write(myScope);
}

checkScope()
document.write(scope)
document.write(myScope)


var scope = "global scope"
function checkScope () {
    var scope = "local scope";
    function nested() {
        var scope = "nested scope";
        document.write(scope);
    }
    nested();
}
checkScope();