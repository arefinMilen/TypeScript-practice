 abstract class user {
    userName: string;
    age : number;

    constructor (userName,age)
    {
        this.userName = userName;
        this.age = age;
    
    }

 abstract display():void;
// {
//     console.log(`userName: ${this.userName} , Age : ${
//         this.age
//     }`)
// }


}

// let user1 = new user("samsul arefin",221)
// user1.display()
// let user2 = new user("milen",101)
// user2.display()



class students extends user
{
studentId:number;

constructor (userName:string,age:number,studentId:number)
    {
         
    super(userName,age);
    this.studentId = studentId;
    }
    display():void
    {
        console.log(`userName: ${this.userName} , Age : ${
            this.age
        } Student Id : ${this.studentId}`)
    }

}

let student1 = new students("milen",24,2323232111);
student1.display()