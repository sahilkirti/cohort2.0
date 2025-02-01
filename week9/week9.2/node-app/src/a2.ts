type keyInput ='up' | 'down' | 'left' | 'right'
function doSomething(keyPressed: keyInput) {
    if(keyPressed=='up'){

    }
}
doSomething('up')


type keyInput1 = 'up' | 'down' | 'left' | 'right'
function doSomething1(keyPressed: keyInput1){
    if(keyPressed=='up'){
    }
}
doSomething1('up');

enum Direction {
    Up='up',
    Down='down',
    Left='left',
    Right='right'
}

function doSomething2(keyPressed: Direction){
    if(keyPressed=='up'){
    }
}
doSomething2(Direction.Up)
doSomething2(Direction.Left)
console.log(Direction.Up)


type input = string | number
function firstElement(arr: input[]){
    return arr[0]; 
}
const val=firstElement(['sing','king']);
console.log(val);


//this the first type ;
function identity<T>(arg: T){
    return arg;
}
let output1 = identity<string>('sing');
console.log(output1.toUpperCase)


//this is te next type;
function identity2<T>(arg: T[]){
    return arg[0];
}
let output2 = identity2(['sing','king']);
console.log(output2.toUpperCase)


export function add(a: number, b: number){
    return a+b;
}


