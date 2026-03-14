const { create } = require("domain");

// SCOPE LESSON 
let globalVar="I'm everywhere";

const testScope=()=>{
    let localVar="I'm only in this function";
    if(true){
        let blockVar="I'm only in this block";
        console.log(globalVar);
        console.log(localVar);
        console.log(blockVar);
    }
    console.log(globalVar);
    console.log(localVar);
}
testScope();


// HOISTING LESSON 
console.log(a);
var a=10;
console.log(a);

// console.log(b);
let b=20;

sayHello();
function sayHello(){
    console.log('Hello');
}


// CLOSURES LESSON 
function createCounter(){
    let count = 0;

    return function(){
        count++;
        return count;
    };
}
const counter1=createCounter();
console.log(counter1());
console.log(counter1());

const counter2=createCounter();
console.log(counter2());


// ASSIGNMENT 
const createGreeting=(greeting)=>{
    return function(name){
        return(`${greeting}, ${name}!`);
    }
}
const myGreeting=createGreeting("Hello");
console.log(myGreeting("Rachael"));