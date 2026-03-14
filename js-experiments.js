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
