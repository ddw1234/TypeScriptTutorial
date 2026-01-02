class Users{
     userName: string="";
     age:number=0;
   

     add(userName:string):string{
       return this.userName + " added successfully";
    }    
}

class Employee extends Users{
    empName: string="";

    getName(){
        return this.empName;
    }
}

var user1 = new Users();
user1.userName = "John";
user1.age = 25; 
console.log(user1.add(user1.userName));

var emp1 = new Employee();
emp1.empName = "Smith";
console.log(emp1.add(emp1.userName="Test"));
console.log(emp1.getName());