function receivesAFunction(callback) {
    callback();  // Call the callback function
}

function myCallback() {
    console.log("Have your callback function here!");
}
receivesAFunction(myCallback); // Call receivesAFunction with myCallback as the argument


function returnsANamedFunction() {
    return function namedFunction() {
           };
}


function returnsAnAnonymousFunction() {
    return function () {
        
    };
}
