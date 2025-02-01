//define a variable in typeScript;
const x: number = 9;
console.log(x);
//giving argument to a function ;
function greet1(firstname: string) {
    console.log("hello "+ firstname);
}
greet1('sahil');

//returning a value to a function;
 function sum(a:number ,b: number):number{
    return a+b;
 }
 const value= sum(10,20);
 console.log(value);

//type inference typeScript automatically find the type of the function;
 function isLegal(age: number){
    if(age>=18)
        return true;
    else
        return false;
 }
 let y=isLegal(32);

 //function which take another function as input 
 
function runAfter1sec(fn: () => void){
    setTimeout(fn);
}
runAfter1sec(function(){
    console.log("hi there");
})


const greet2 = (name: string) => `hello ${name}`;;
greet1('singking');

