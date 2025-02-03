interface Person{
    username: string
    password: string
    greet() : string
}
let user: Person = {
    username: 'sahil124',
    password: 'singking1232312',
    greet() {
        return `hello world ${this.username}`;
    }
};
console.log(user.greet());