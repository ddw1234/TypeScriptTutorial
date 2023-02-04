class Users{
    name:string = '';
    email:string ='';
    
    addUser(user:string)
    {
        return '${user} is added'
    }
}

let User1=new Users;
let result=User1.addUser('anik');
console.log(result);