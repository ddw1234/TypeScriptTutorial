class Users{

   constructor(public name:string)
   {
    this.name=name;
    console.log("{name} constructor call ");
   }
    
    addUser(user:string)
    {
        return '${user} is added'
    }
}

let User1=new Users('ak');
let result=User1.addUser('anik');
console.log(User1.name);