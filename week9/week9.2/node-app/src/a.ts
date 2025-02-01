interface User{
    name: string,
    age: number,
    email?: string   //it is optional due to ?
}
function isLegal1(user: User){
    if(user.age>=18){
        return true;
    }
    else{
        return false;
    }
}
function greet(user: User){
    console.log('hi there' + user.name);
}
isLegal1({
    name: 'singking',       //age & name is mandatory;
    age: 21,
    email:'singking@gmail.com;'
}) 
greet({
    name:'supermame',
    age: 22               //age & name is mandatory;
})

