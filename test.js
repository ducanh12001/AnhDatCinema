function asyncFunction(callback) {
    console.log("Start");
    setTimeout(() => {
       callback();
    }, 1000);
    console.log("Waiting");
 }
 
 let printEnd = function() {
    console.log("End");
 }
 
 asyncFunction(printEnd)