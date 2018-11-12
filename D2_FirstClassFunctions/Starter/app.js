// Your Javascript Code Goes Here

function greet(){
    console.log('hellos');
}

greet();

//functions are first class, ie are objects and can be used the same way as any other variable. In this example they can be passed as paramenters into functions;

function logGreeting(fn){
    fn();
}

logGreeting(greet);

//function expression - an anonymous function assigned to a variable. still first class

var greetMe = function() {
    console.log('Hola')
}

greetMe();
logGreeting(greetMe)