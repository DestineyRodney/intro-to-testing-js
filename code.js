// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello
function sayHello(input) {
    // if (input === 'Alex'){
    //     return "Hello, Alex!";
    // } else if (input === 'Pat'){
    //     return "Hello, Pat!"
    // } else if (input === 'Jane'){
    // return "Hello, Jane!";
    // }
    if (input == "") {
        return "Hello, World";
    } else if (typeof input === 'string'){
        return "Hello, " + input + "!";
    } else if (input === false){
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input !== 'string'){
        return "This is not a name!";
    } else {
        return "Hello, World!";
    }
}
// return "Hello, " + input + "!";




