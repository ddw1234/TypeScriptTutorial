"use strict";
class Users {
    constructor() {
        this.name = '';
        this.email = '';
    }
    addUser(user) {
        return '${user} is added';
    }
}
let User1 = new Users;
let result = User1.addUser('Anik');
console.log(result);
